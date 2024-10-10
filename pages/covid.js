document.write(`
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/quarantine/banner.png?raw=true" width=710 height=220></p>

<p><a href="https://github.com/cridonoso/QuarantineModel/"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a></p>
<h2><p style="text-align: center;">How Decisions Correlate with Data </p></h2>
<p><img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python"><img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="scikit-learn"><img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"><img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy"><img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib">
<br>
The COVID-19 pandemic was a global phenomenon that forced populations to isolate in their homes, avoiding physical contact. Quarantines were one of the mechanisms used by governments to control the virus&#39;s spread. However, the reasons behind a territory&#39;s entry into quarantine were often unclear, leading to societal speculation and mistrust in political decision-making.</p>
<p>Utilizing public data from Chile&#39;s Ministry of Science, we sought to develop a model that could predict whether a territory should enter quarantine. The model was trained on historical quarantine data and employed a set of predictors including the number of infected individuals, deaths, positivity rate, and various economic indicators such as the IPSA (Selective Stock Price Index) and the dollar price. Much of this data was extracted through web scraping.</p>
<p>A Random Forest classifier was used to train the model, and the resulting confusion matrix is depicted in the following figure.</p>
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/quarantine/cm.png?raw=true" width=510 height=340></p>

<p>Post-training, we visualized feature importance, a metric that assesses the contribution of each feature to the prediction based on entropy and Gini impurity.</p>
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/quarantine/importance.png?raw=true" width=810 height=1000></p>


`);

