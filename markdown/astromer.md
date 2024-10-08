<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/banner.png?raw=true" width=600 height=180>

 ## <p style="text-align: left;">A transformer pre-trained model for light curve representation</p>

The Astromer project aims to create a pre-trained foundational model for light curve representation. In collaboration with the Universidad de Concepción and the Institute of Applied Computation Sciences at Harvard, this project was inspired by the success of Large Language Models to develop a novel approach for embedding and representing light curve data.

### How does it work?
Similar to text embeddings, Astromer can create embeddings for raw light curves from sequences of observations taken by telescopes in a particular moment (_see image bellow_). 
 <p style="text-align: left;"><img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/lc.png?raw=true" width=480 height=350></p> 
The shape of the light curve characterizes the astronomical object. Astronomers usually extract statistical and physical features from the time series data to categorize objects into classes. Astromer can do it automatically in a self-supervised way!
<br><br>
Astromer optimizes an attention-based encoder to predict masked values that are randomly chosen. 
<br><br>
<p style='text-align: right;'><i>
<b>The model must look at the context</b> to predict the hidden elements. If the model can predict using the information around, then we can say <b>the model has understood the domain.</b>
</i></p>  
<br><br>

