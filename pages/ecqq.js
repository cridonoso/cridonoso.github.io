document.write(`
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/ecqq/banner.png?raw=true" width=1000 height=310></p>

<h2><p style="text-align: center;"> Describing citizen surveys using text anylisis</p></h2>
<p>El Chile Que Queremos (ECQQ, from the Spanish &#39;The Chile we desire&#39;) was a <a href="https://www.gob.cl/noticias/gobierno-presenta-el-chile-que-queremos-iniciativa-de-dialogos-y-escucha-social-para-avanzar-en-nuevas-propuestas-para-el-pais/">governmental initiative</a> launched by the <b>Chilean Ministry of Social Development and Sciences</b> in response to the widespread demonstrations of 2019. </p>
<p>The initiative aimed to <b>gather and analyze citizen perspectives on the nation&#39;s future</b>, seeking to understand the deep-seated concerns and aspirations that fueled the social unrest. </p>
<p>The Ministry conducted extensive citizen surveys to collect data on various topics such as <i>education, healthcare, economic development, and social justice</i>. </p>
<p>Universities across Chile (<i>Universidad de Concepcion, Universidad de Chile, Pontificia Universidad Católica de Chile, and Universidad del desarrollo</i>) were then tasked with analyzing and synthesizing the survey results to identify key themes and priorities</p>
<h3>Team Group</h3>
<p>The team was composed of an interdisciplinary group ranging from software engineers to political scientists. In particular, I was responsible for <b>data manipulation, modeling, and the design of the PostgreSQL database</b>.</p>
<p>Through a careful analysis of structured and unstructured text data, we were able to identify three key categories of information: emotions, citizen needs, and contributions. </p>
<h4>Emotions</h4>
<p>To categorize emotions, we employed the psychoevolutionary theory of emotions proposed by R. Plutchik (1980). Using a lexicon containing 2036 words and their associated emotions, we calculated the distance between each answer word and the lexicon words. This distance calculation allowed us to create an average score and determine the final emotion. </p>
<p>The accompanying image displays a word cloud for each emotion, highlighting the most frequently used words,
 <p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/ecqq/most_entropy_emo_1.png?raw=true" width=500 height=310></p></p>
<h4>Contributions</h4>
<p>For contributions, we first codify answer text using a pre-trained language model called <a href="https://github.com/dccuchile/beto">BETO embedding</a>. These embeddings then serve as input for a Long Short-Term Memory (LSTM) network, which classifies each text paragraph into one of several predefined contribution categories. We based our category system on <a href="https://www.unomaha.edu/international-studies-and-programs/_files/docs/adler-goggin-civic-engagement.pdf">the continuum of civic engagement</a> framework proposed by Crowley (n.d.).</p>
<p>After training we evaluate the performance on a test set of the survey&#39;s answers:
 <p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/ecqq/conf_mtx.png?raw=true" width=620 height=550></p></p>
<p>One of the most interesting aspects of our analysis was the ability to visualize the distribution of probabilities for each text, rather than simply assigning a single, definitive label. 
 <p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/ecqq/contribution_probs.png?raw=true" width=620 height=510></p>
This shows that people can be involved in different ways, which is more like real life.
<br><br>
By visualizing the probability distributions using histograms or bar charts, we were able to gain a deeper understanding of the underlying patterns and relationships between different categories of contributions.</p>

`);

