document.addEventListener('DOMContentLoaded', () => {
    // --- VARIABLES GLOBALES Y CONSTANTES ---
    const APP_STATE = {
        allData: {}, // Almacenará los datos de todas las asignaturas
        currentCourse: null, // La clave de la asignatura actual
        allCategories: [],
        allKeywords: [],
    };

    // Nombres de los archivos de base de datos. ¡Añade más aquí en el futuro!
    const COURSE_FILES = {
        econometria_2: 'Econometría',
        // 'calculo': 'Cálculo', // Ejemplo de cómo añadir otra asignatura
    };

    const courseSelectorScreen = document.getElementById('course-selector-screen');
    const courseButtonsContainer = document.getElementById('course-buttons-container');
    const appContainer = document.getElementById('app-container');
    const courseTitle = document.getElementById('course-title');
    const changeCourseBtn = document.getElementById('change-course-btn');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const keywordFilter = document.getElementById('keyword-filter');
    const randomBtn = document.getElementById('random-btn');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const resultsContainer = document.getElementById('results-container');
    const noResults = document.getElementById('no-results');
    const pdfViewerModal = document.getElementById('pdf-viewer-modal');
    const closePdfBtn = document.getElementById('close-pdf-btn');
    const pdfEmbedContainer = document.getElementById('pdf-embed-container');

    // --- FUNCIONES DE INICIALIZACIÓN ---

    /**
     * Inicia la aplicación creando los botones para seleccionar asignatura.
     */
    function initializeCourseSelector() {
        courseButtonsContainer.innerHTML = ''; // Limpiar por si acaso
        for (const [key, name] of Object.entries(COURSE_FILES)) {
            const button = document.createElement('button');
            button.className = 'course-btn';
            button.textContent = name;
            button.dataset.courseKey = key;
            button.addEventListener('click', () => loadCourse(key));
            courseButtonsContainer.appendChild(button);
        }
    }

    /**
     * Carga los datos de la asignatura seleccionada y configura la app.
     * @param {string} courseKey - La clave de la asignatura (ej: 'econometria').
     */
    async function loadCourse(courseKey) {
        if (APP_STATE.allData[courseKey]) {
            setupAppForCourse(courseKey);
        } else {
            try {
                const response = await fetch(`/data/${courseKey}.json`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                APP_STATE.allData[courseKey] = data;
                setupAppForCourse(courseKey);
            } catch (error) {
                console.error('Error al cargar la base de datos:', error);
                alert(`No se pudo cargar la base de datos para la asignatura "${COURSE_FILES[courseKey]}". Revisa la consola para más detalles.`);
            }
        }
    }
    
    /**
     * Configura la interfaz de usuario para la asignatura cargada.
     * @param {string} courseKey - La clave de la asignatura.
     */
    function setupAppForCourse(courseKey) {
        APP_STATE.currentCourse = courseKey;
        const exercises = APP_STATE.allData[courseKey];

        // Poblar filtros
        const uniqueCategories = [...new Set(exercises.flatMap(e => e.categories))].sort();
        const uniqueKeywords = [...new Set(exercises.flatMap(e => e.keywords))].sort();
        populateSelect(categoryFilter, uniqueCategories, 'Todas las Categorías');
        populateSelect(keywordFilter, uniqueKeywords, 'Todos los Keywords');
        
        // Actualizar UI
        courseTitle.textContent = `Ejercicios de ${COURSE_FILES[courseKey]}`;
        courseSelectorScreen.classList.remove('active');
        clearFilters();
    }

    // --- FUNCIONES DE RENDERIZADO Y UI ---
    
    /**
     * Rellena un elemento <select> con opciones.
     * @param {HTMLElement} selectElement - El elemento select a poblar.
     * @param {string[]} options - Array de strings para las opciones.
     * @param {string} defaultOptionText - Texto para la primera opción por defecto.
     */
    function populateSelect(selectElement, options, defaultOptionText) {
        selectElement.innerHTML = `<option value="">${defaultOptionText}</option>`;
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            selectElement.appendChild(opt);
        });
    }

    /**
     * Muestra una lista de ejercicios en el contenedor de resultados.
     * @param {object[]} exercises - El array de ejercicios a mostrar.
     */
    function renderResults(exercises) {
        resultsContainer.innerHTML = '';
        if (exercises.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        
        noResults.classList.add('hidden');
        exercises.forEach(exercise => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            card.dataset.filename = exercise.file;
            
            card.innerHTML = `
                <div class="card-banner">${exercise.banner}</div>
                <div class="card-file">${exercise.file}</div>
            `;
            
            card.addEventListener('click', () => showPdf(exercise.file));
            resultsContainer.appendChild(card);
        });
    }

    /**
     * Muestra el visor de PDF con el archivo seleccionado.
     * @param {string} filename - El nombre del archivo PDF.
     */
    function showPdf(filename, courseKey = APP_STATE.currentCourse) {
        pdfEmbedContainer.innerHTML = `<embed src="/data/${courseKey}/${filename}" type="application/pdf">`;
        pdfViewerModal.classList.remove('hidden');
    }

    /**
     * Cierra el visor de PDF.
     */
    function closePdf() {
        pdfEmbedContainer.innerHTML = ''; // Detiene la carga del PDF
        pdfViewerModal.classList.add('hidden');
    }

    // --- FUNCIONES DE LÓGICA Y FILTRADO ---
    
    /**
     * Aplica los filtros actuales y vuelve a renderizar los resultados.
     */
    function applyFilters() {
        const searchText = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const selectedKeyword = keywordFilter.value;
        
        const allExercises = APP_STATE.allData[APP_STATE.currentCourse];

        const filteredExercises = allExercises.filter(exercise => {
            const matchesSearch = searchText === '' || 
                                  exercise.banner.toLowerCase().includes(searchText) ||
                                  exercise.file.toLowerCase().includes(searchText);

            const matchesCategory = selectedCategory === '' || 
                                    exercise.categories.includes(selectedCategory);

            const matchesKeyword = selectedKeyword === '' || 
                                   exercise.keywords.includes(selectedKeyword);

            return matchesSearch && matchesCategory && matchesKeyword;
        });

        renderResults(filteredExercises);
    }
    
    /**
     * Limpia todos los filtros y muestra todos los ejercicios.
     */
    function clearFilters() {
        searchInput.value = '';
        categoryFilter.value = '';
        keywordFilter.value = '';
        applyFilters();
    }
    
    /**
     * Selecciona y muestra un ejercicio aleatorio de los actualmente filtrados.
     */
    function showRandomExercise() {
        const visibleCards = resultsContainer.querySelectorAll('.exercise-card');
        if (visibleCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * visibleCards.length);
            const randomCard = visibleCards[randomIndex];
            showPdf(randomCard.dataset.filename);
        } else {
            alert('No hay ejercicios para mostrar. Prueba a limpiar los filtros.');
        }
    }
    
    // --- EVENT LISTENERS ---
    
    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    keywordFilter.addEventListener('change', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
    randomBtn.addEventListener('click', showRandomExercise);
    closePdfBtn.addEventListener('click', closePdf);

    changeCourseBtn.addEventListener('click', () => {
        courseSelectorScreen.classList.add('active');
    });

    // Cierra el visor de PDF con la tecla 'Escape'
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !pdfViewerModal.classList.contains('hidden')) {
            closePdf();
        }
    });

    // --- PUNTO DE ENTRADA ---
    initializeCourseSelector();
});