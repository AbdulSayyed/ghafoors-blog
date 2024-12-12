---
title: Machine Larning and Deeplearning
linkTitle: How ML works
date: 2024-11-20T03:33:25Z
draft: true
description:
noindex: false
# comments: false
nav_weight: 1
# nav_icon:
#   vendor: bootstrap
#   name: toggles
#   color: '#e24d0e'
series:
  - Docs
  - Ml # keep only first letter capital
categories:
  - Machine-Learning # use hypen in categories to keep different
tags:
  - Machine Learning
  - AI
  - Deep Learning
#  -
#images:
# - ''
#  -
# menu:
#   main:
#     weight: 100
#     params:
#       icon:
#         vendor: bs
#         name: book
#         color: '#e24d0e'
---

### Introduction to Machine Learning

Machine Learning (ML) is a branch of Artificial Intelligence (AI) focused on developing algorithms that learn from data over time, rather than being explicitly programmed. By analysing data, ML algorithms identify patterns and improve their performance as more data becomes available. However, after a certain point, the performance gains from additional data diminish, leading to a plateau. Additionally, ML algorithms can be categorized into different types based on their learning approach, such as supervised, unsupervised, and reinforcement learning.

### Learning from Data

ML programs learn by repeatedly seeing data, rather than following a set of rules programmed by humans. For example, in deciding whether emails are spam or not, a dataset with labelled emails (spam or not spam) is used. These emails are preprocessed and fed into an ML algorithm, which learns the patterns of spam versus not spam. The more emails it processes, the better it becomes at making accurate predictions.

### Features and Target

Understanding features and targets is crucial in ML. Using the iris[^1] dataset as an example, the goal is to predict the species of a flower (target) based on features like sepal length, sepal width, petal length, and petal width. This dataset helps introduce basic ML concepts, although more complex datasets will be used as the course progresses.

### Supervised and Unsupervised Learning

There are two main types of ML: supervised and unsupervised learning.

1. Supervised Learning: Uses labeled data to predict outcomes, such as classifying emails as spam or not spam. The goal is to predict the label accurately.
2. Unsupervised Learning: Involves finding underlying structures in data without labels. For example, customer segmentation in marketing campaigns uses unsupervised learning to find similar groupings within the dataset.

### Example of Supervised Learning: Fraud Detection

Fraud detection is a common ML problem where a large dataset with labeled transactions (fraud or not fraud) is used. Features like transaction time, amount, location, and category of purchase help predict whether new transactions are fraudulent.

### Example of Unsupervised Learning: Customer Segmentation

In customer segmentation, unsupervised learning finds similar groups within an e-commerce dataset to target them accordingly. There is no right or wrong answer, and different models need to be tested to see which results make the most sense.

### Challenges with Image Data

Defining features in images is more difficult compared to structured data. For example, an image with 256x256 pixels results in over 65,000 features. Using each pixel individually loses the spatial relationships between pixels. This is where deep learning comes in, as it can learn these features on its own.

### Deep Learning

Deep Learning is a subset of ML that uses complex models called deep neural networks. These models can determine the best representation of data. In classic ML, humans have to define features, but deep learning allows models to learn these features autonomously, which is especially useful for tasks like image classification.

### Differences Between ML and Deep Learning

Classic ML requires defining features before feeding data into the model, while deep learning combines this process. Neural networks receive image pixels as input and learn to extract meaningful features by combining them in complex ways. Although these intermediate features may not always be interpretable, they are useful for tasks like image classification.

### Conclusion

In conclusion, deep learning represents the cutting edge of ML and is the focus of most ML research today. It outperforms other algorithms on large datasets. However, for smaller datasets or data that changes frequently, traditional ML algorithms might perform better.

In the next section, the history of AI will be explored to understand how AI has evolved to its current state, where it is now considered the new electricity.

---

## FAQ

{{< bs/accordion "statistics.ml.faq" >}}

---

## References

[^1]: [Anderson, E. (1936). The species problem in Iris. _Annals of the Missouri Botanical Garden_, 3(3), 457-509.](https://doi.org/10.2307/2394164)
[^2]: LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. _Nature_, 521(7553), 436-444. https://doi.org/10.1038/nature14539
[^3]: Goodfellow, I., Bengio, Y., & Courville, A. (2016). _Deep learning_. MIT Press. https://www.deeplearningbook.org/
[^4]: Hastie, T., Tibshirani, R., & Friedman, J. (2009). _The elements of statistical learning: Data mining, inference, and prediction_. Springer Science & Business Media. https://web.stanford.edu/~hastie/ElemStatLearn/
[^5]: Bishop, C. M. (2006). _Pattern recognition and machine learning_. Springer. https://www.microsoft.com/en-us/research/people/cmbishop/prml/
[^6]: Murphy, K. P. (2012). _Machine learning: A probabilistic perspective_. MIT Press. https://www.cs.ubc.ca/~murphyk/MLbook/
[^7]: Schmidhuber, J. (2015). Deep learning in neural networks: An overview. _Neural Networks_, 61, 85-117. https://doi.org/10.1016/j.neunet.2014.09.003
[^8]: Bengio, Y., Courville, A., & Vincent, P. (2013). Representation learning: A review and new perspectives. _IEEE Transactions on Pattern Analysis and Machine Intelligence_, 35(8), 1798-1828. https://doi.org/10.1109/TPAMI.2013.50
[^9]: Jordan, M. I., & Mitchell, T. M. (2015). Machine learning: Trends, perspectives, and prospects. _Science_, 349(6245), 255-260. https://doi.org/10.1126/science.aaa8415
[^10]: Sutton, R. S., & Barto, A. G. (2018). \*Reinforcement learning:
[^11]: Fisher, R. A. (1936). The use of multiple measurements in taxonomic problems. _Annals of Eugenics_, 7(2), 179-188. https://doi.org/10.1111/j.1469-1809.1936.tb02137.x
[^2]: LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. _Nature_, 521(7553), 436-444. https://doi.org/10.1038/nature14539
[^3]: Goodfellow, I., Bengio, Y., & Courville, A. (2016). _Deep learning_. MIT Press. https://www.deeplearningbook.org/
[^4]: Hastie, T., Tibshirani, R., & Friedman, J. (2009). _The elements of statistical learning: Data mining, inference, and prediction_. Springer Science & Business Media. https://web.stanford.edu/~hastie/ElemStatLearn/
[^5]: Bishop, C. M. (2006). _Pattern recognition and machine learning_. Springer. https://www.microsoft.com/en-us/research/people/cmbishop/prml/
[^6]: Murphy, K. P. (2012). _Machine learning: A probabilistic perspective_. MIT Press. https://www.cs.ubc.ca/~murphyk/MLbook/
[^7]: Schmidhuber, J. (2015). Deep learning in neural networks: An overview. _Neural Networks_, 61, 85-117. https://doi.org/10.1016/j.neunet.2014.09.003
[^8]: Bengio, Y., Courville, A., & Vincent, P. (2013). Representation learning: A review and new perspectives. _IEEE Transactions on Pattern Analysis and Machine Intelligence_, 35(8), 1798-1828. https://doi.org/10.1109/TPAMI.2013.50
[^9]: Jordan, M. I., & Mitchell, T. M. (2015). Machine learning: Trends, perspectives, and prospects. _Science_, 349(6245), 255-260. https://doi.org/10.1126/science.aaa8415
[^10]: Sutton, R. S., & Barto, A.
