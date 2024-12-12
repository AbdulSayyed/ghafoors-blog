---
title: 'Introduction to Statistics'
linkTitle: introduction
date: 2024-12-10T16:00:40Z
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
  - Statistics
categories:
#  -
tags:
#  -
images:
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

Summary.

<!--More-->

[//]: # ' Clean this file keep only what is statistics about, taken from sayyedblog.com. Also create a new folder for images in static/images/. the folder /stats/ have been entered into .gitignore file. It has images which are not to be used online '

## What is statistics?

- Statistics is the science and art of prediction and explanation. In most fields of study, the research relies on `statistical analysis of data` .
- Whether it is a `Life Science, Political Science, Social Sciences, Medicine, or Data Analysis` statistical reasoning emphasizes how statistics is applied to the particular discipline.
- It encompasses numerous topics e.g.:

- Numerical and Graphical summaries of data,
- Data Acquisition & Experimental Design,
- Probability,
- Hypothesis testing,
- Confidence intervals,
- Correlation and regression.

- Students apply these concepts to data using some kind of software probably `minitab, matlab, spm etc`
- The whole idea is to understand `real-world problems` better by applying these concepts

## Another way of defining statistics

A value obtained by tabulating or processing the results of the survey on a group set under certain conditions and correlation

- how to Read Data

> It is your job to see the result of the data analyses and have your judgement based on objective evidence.

- Put where it belong to `Correlation coefficient is largely affected by extreme data` you also must know `what is sampling error and standard error`

- This 68% means that, if the sample survey is conducted 100 times with the same survey method, the true value is somewhere between x-sigma and x+sigma in 68 times out to of 100.

- PPDAC

{{< figure src="/images/stats/basic/ppdac.png" caption="" attr="" attrlink="" >}}

> In order not to get confused by Figures

- Don't get fooled by lies in statistics
- Statistics is supposed to be objective,
- The image that `data = objective` does not make sense without any conditions
- Without accurate knowledge you might be fooled by mock statistic or statistics
- It is necessary to acquire statistics literacy.

{{< figure src="/images/stats/basic/confused.png" caption="" attr="" attrlink="" >}}

- Even if statistics are reliable you need knowledge to interpret it, otherwise there could be a big mistake.
- What are objects for tabulation?
- what kind of items are addressed?
- What are contents of items in particular?
- What kinds or data are collected?

> it is fundamental to accurately understand the coverage of statics and grasps whether its is suitable for your problems.

- it is necessary to understand digital statistics has strict definitions and be consciously aware of their meaning sand contents.
- Know accurately from what survey that statistical value was tabulated.

- it is important to understand that there are cases where similar-looking data are different due to purpose and change in definition, and use it based on stringent verifications.

- Timing of statistics: know accurately what state and timing are present with figures.

- it is necessary to understand .... in figures and trends due to timing and use figures that suit a purpose with and accurate understanding.
-

{{< figure src="/images/stats/basic/category.png" caption="category.png" attr="" attrlink="" >}}

- An example of Quantitative vs qualitative data

{{< figure src="/images/stats/basic/data.png" caption="" attr="" attrlink="" >}}

- Further classification of `Qualitative data`

{{< figure src="/images/stats/basic/classify.png" caption="classify.png" attr="" attrlink="" >}}

- Quantitative Data

{{< figure src="/images/stats/basic/quantative.png" caption="quantitative.png" attr="" attrlink="" >}}

- Further classification

{{< figure src="/images/stats/basic/quantative-1.png" caption="" attr="" attrlink="" >}}

- A difference in interval scale is regarded as a ration scale.
- Example: three hours passed ( ration scale) from 7:00 (interval scale) to 10:00 9interval scale).

## Data Distribution and Correlation : how to rad following data

1. Variance and Standard deviation: Showing dispersion of data
2. Quartile , Boxplot: Showoing a lot of data distribution simultaneously
3. Standardization , deviation: Comparing different data groups:
4. Correlation diagram, Corrletation: Showing relatoin of variables:

{{< figure src="/images/stats/basic/objectives.png" caption="" attr="" attrlink="" >}}

#### Data Dispersion

- Two distributions with same center points:

{{< figure src="/images/stats/basic/dispersion.png" caption="" attr="dispersion.png" class="aligncenter" attrlink="" >}}

---

### Experimental Design, Why to design?[^1]

- We are concerned with the analysis of data generated from an experiment.

- Thus it is wise to put some time and effort to systematically organize the the experiment properly to make sure that the right type of data, and enough data is available to answer the question of interest as clearly as possible with efficiency. This process is called `experimental design`

- Thus `specific questions that the experiment is intended to answer must be clearly identified` before carrying out the experiment.

- One should be able to identify or attempt to identify known or expected `sources of variability` in the experimental units.

- One of main aims of a designed experiments is to reduce the effect of these sources of variability on the answers to `questions of interest`. That is, we design the experiment in order to improve the precession of our answers

### What is an Experimentation? [^2]

- An experiment deliberately imposes a `treatment` on a group of objects or subjects in the interest of observing the response. This differs from an observational study, which involves collecting and analyzing data without changing existing conditions.

- Because the **validity of a experiment is directly affected by its construction and execution**, attention to experimental design is extremely important.

### Treatment [^3]

- In experiments, a treatment is something that researchers administer / monitors to experimental units.

- For example, a corn field is divided into four, each part is `treated` with a different fertiliser to see which produces the most corn.

- A teacher practices different teaching methods on different groups in her class to see which yields the best results

- A doctor treats a patient with a skin condition with different creams to see which is most effective.

- Treatments are administered to experimental units by `level`, where level implies amount or magnitude. For example, if the experimental units were given 5mg, 10mg, 15mg of a medication, those amounts would be three levels of the treatment.

### Factor [^3]

- A factor of an experiment is a `controlled independent variable`; a variable whose levels are set by the experimenter.

- A factor is a general type or category of treatments. Different treatments constitute different levels of a factor.
- For example, three different groups of runners are subjected to different training methods. The runners are the experimental units, the training methods, the treatments, where the three types of training methods constitute three levels of the factor `type of training`.

### Control

- Suppose a farmer wishes to evaluate a new fertilizer. She uses the new
  fertilizer on one field of crops (A), while using her current fertilizer on another field of crops (B). The irrigation system on field A has recently been repaired and provides adequate water to all of the crops, while the system on field B will not be repaired until next season. She concludes that the new fertilizer is far superior.

- The problem with this experiment is that the farmer has neglected to control for the effect of the differences in irrigation. This leads to experimental bias, the favouring of certain outcomes over others.
- To avoid this bias, the farmer should have tested the new fertilizer in identical conditions to the control group, which did not receive the treatment.
- Without controlling for outside variables, the farmer cannot conclude that it was the effect of the fertilizer, and not the irrigation system, that produced a better yield of crops.

- Another type of bias that is most apparent in medical experiments is the placebo effect. Since many patients are confident that a treatment will positively affect them, they react to a control treatment which actually has no physical affect at all, such as a sugar pill. For this reason, it is important to include control, or placebo, groups in medical experiments to evaluate the difference between the placebo effect and the actual effect of the treatment.

- The simple existence of placebo groups is sometimes not sufficient for avoiding bias in experiments. If members of the placebo group have any knowledge (or suspicion) that they are not being given an actual treatment, then the effect of the treatment cannot be accurately assessed. For this reason, `double-blind experiments are generally preferable`. In this case, neither the experimenters nor the subjects are aware of the subjects' group status. `This eliminates the possibility that the experimenters will treat the placebo group differently from the treatment group, further reducing experimental bias.`

### Level of measurements

{{< figure src="/images/stats/basic/NOIR.jpg" caption="" attr="" attrlink="" >}}

---

### Laerd Statistics

---

### association

- So far you have indicated that you want to assess the association between two variables. Now, you need to decide how each of your two variables was measured, whether on a continuous, ordinal, dichotomous or multinomial scale.

- It is important to note that your two variables can be measured on a different scale (e.g., one on a "continuous" scale and the other on a "dichotomous" scale) or they can be both measured on the same scale (e.g., both variables on a "continuous" scale).

#### Continuous variables

Continuous variables include both interval and ratio measurement types. Interval variables can be measured along a continuum and have a numerical value (e.g., temperature measured in degrees Celsius or Fahrenheit). So the difference between 20°C and 30°C is the same as 30°C to 40°C. Ratio variables are interval variables, but with the added condition that a 0 (zero) measurement indicates that there is none of that variable. So, temperature measured in degrees Celsius or Fahrenheit is not a ratio variable because 0°C does not mean there is no temperature. However, temperature measured in Kelvin is a ratio variable as 0 Kelvin (often called absolute zero) indicates that there is no temperature whatsoever. For the purposes of this test selector, you simply need to decide whether either (or both) of your two variables are continuous variables (i.e., they can be interval variables or ratio variables). Examples of continuous variables are presented below:

Distance in meters, which is measured on a ratio scale.
Temperature in degrees Celsius, which is measured on an interval scale.
Revision time in hours, which is measured on a ratio scale.
Intelligence using IQ score, which is measured on an interval scale.
Exam performance using a score of 0 to 100, which is measured on a ratio scale.

#### Ordinal variables

Ordinal variables have `two or more categorie`s` that are ordered or ranked. For example, imagine that you asked someone if they liked the policies of the Democratic Party and they could answer either "Not very much", "They are OK" or "Yes, a lot". This is an ordinal variable because you can rank the three categories from the most positive (Yes, a lot), to the middle response (They are OK), to the least positive (Not very much). However, whilst we can rank the categories, we cannot place a "value" to them. In other words, we cannot say that the category, "They are OK", is twice as positive as the category, "Not very much". Equally, you cannot state that the difference between the categories, "Not very much" and "They are OK", is the same as the categories, "They are OK" and "Yes, a lot". That is, you cannot place any constant distance between the values of the categories like you can with continuous variables. Examples of ordinal variables are presented below:

- Attitude towards abortion, measured on a 5-point Likert scale: 1 - Strongly agree, 2 - Agree, 3 - Neither agree nor disagree, 4 - Disagree, 5 - Strongly disagree (N.B., this is known as a 'rating' scale).

- Desire to join the donor list, measured on a 3-point scale: 1 - Not at all, A little, 3 - A great deal (N.B., this is known as a 'rating' scale).

- Attitude towards debt, measured on a 10-point scale: Open 1 2 3 4 5 6 7 8 9 10 Closed (N.B., this is known as a 'semantic differential' scale).

#### Dichotomous variables

Dichotomous variables are nominal variables with only two categories. Dichotomous variables do not have an intrinsic order (i.e., they cannot be ranked, unlike ordinal variables). For example, if you were interested in the variable, "gender", you would most often categorize somebody as being either "male" or "female". Alternatively, if you were interested in the presence of heart disease, you might have a dichotomous variable called "heart disease" with two categories: "yes" and "no" (i.e., the person has heart disease or they do not). The categories also need to be mutually exclusive. That is, a case (e.g., a person, building, animal, object, etc.) cannot be included in more than one category. For example, you cannot be both male and female or have and do not have heart disease. Examples of dichotomous variables are presented below:

Mobile phone ownership, with a choice of two categories: Yes or No.
Gender, with a choice of two categories: Male or Female.
Heart disease, with a choice of two categories: Yes or No.
Experimental group, with a choice of two categories: Intervention or Control.

#### Multinomial variables

Multinomial variables are nominal variables with `three or more categories`. Multinomial variables do not have an intrinsic order (i.e., they cannot be ranked, unlike ordinal variables). For example, an estate agent could classify their types of property into five distinct categories such as detached houses, semi-detached houses, terraced houses, flats or bungalows. The categories also need to be mutually exclusive. That is, a case (e.g., a person, building, animal, object, etc.) cannot be included in more than one category. For example, a property cannot be both a flat and a terraced house. Examples of multinomial variables are presented below:

Mobile phone brand, with a choice of three categories: Samsung, Apple or Other.
Gender, with a choice of four categories: Heterosexual, Homosexual, Bisexual or Transsexual.
Hair colour, with a choice of five categories: Brown, Black, Blond, Red or Grey.
Political party, with a choice of five categories: Conservative, Labour, Liberal Democrats, UKIP or Green Party.
Back to top ^
Home About Us Contact Us Terms & Conditions Privacy & Cookies © 2018 Lund Research Ltd

- statisics

## What is a likert Scale ?

- It is a type of rating scale used to measure attitude or opinions. Respondent are asked to rate items on level of agreement.

  - Strongly agree
  - Agree
  - Neutral ( neither agree nor disagree)
  - Disagree
  - Strongly disagree

  > The middle point is neutral, the above part is concerned with agreement and below is with disagreement so there has to be odd number if the middle has only one question.

  - The scale does not have to say agree or disagree, it can be other words, e.g., quality, frequency etc. These items or responses are known as Likert Scale Response Anchors.
  - Once they are answered numbers are provided to them so Strongly agree would become 5 and strongly disagree would become 1. By doing so you can easily assign meaning to responses. So average score of 4-5 would be a good service indication compare to a score of 1-2.

---

[//]: # 'The following section is about fMRI statistics'

### Block Design

BLOCK DESIGN

     Block design was the first type of experimental paradigm to be used in FMRI
     research, as well as the first to involve more complex statistical analysis.
     It is still the most commonly used experimental paradigm in FMRI studies.

     The block design consists of several discrete epochs of on-off periods,
     with the "on" representing a period of stimulus presentations, and the
     "off" referring to a state of rest or baseline.  Although blocks may range
     in duration from 16 seconds to a minute or more (average is about 20-30
     seconds), they all share the same basic on-off pattern.  These on-off
     states are alternated throughout the experiment to ensure that signal
     variation from small changes in scanner sensitivity, subject movement, or
     attention shifts have a similar effect on the signal responses associated
     with each of the different states.  Below is an example of a block design
     with two experimental conditions: pictures (red blocks) and words (green
     blocks), along with their resulting hemodynamic response functions.

Once an experiment has been run and the data have been collected, the
appropriate statistical analysis must be implemented. With block design,
individual trials are not compared. Rather, the underlying hemodynamic
responses acquired during one blocked condition are compared to the
signals acquired from baseline, or from other blocks involving different
task conditions (e.g., "picture" blocks versus "word" blocks). As such,
regions of signal activity that change between one condition and another
can be identified with considerable statistical power.
Advantages of Block Design:

    * A simple block design is adequate for many types of experiments,

especially in early, exploratory stages of research projects.

    * Block designs allow for considerable experimental flexibility,
      allowing parametric designs and multi-factorial designs to be
      employed.

    * Block design can be especially advantageous and a good starting point
      for newcomers to the field of FMRI research.

    * Block design is statistically powerful and straightforward to analyze,
      as the shape of the response function can be assumed to be simple.

     Disadvantages of Block Design:

    * Block design can be predictable and boring, making it prone to
      potential confounds such as rapid habituation, anticipation, set, or
      other strategy effects.

    * It may be difficult to control a specific cognitive state for the
      relatively long periods of each block.  A 'rest' state is rarely true
      rest, as the mind may wander in a subject who is not engaged in a
      specific task.

    * Information regarding activation response time courses cannot be
      obtained with block design because individual responses are lost
      within the block.

    * The high predictability of block design makes it inappropriate for
      certain cognitive tasks, such as an 'oddball' paradigm where a
      reaction to an unexpected stimulus is probed.

    * The BOLD signal may not remain constant across the epoch of interest.

Within a block, the underlying hemodynamic response can change from
the first trial in the block to the last trial within the block. This
result may be a consequence of anticipatory effects.

    * Block design is not feasible for certain patient populations.  For
      instance, hallucinatory schizophrenics who often display irregular or
      uncontrollable behaviors cannot be forced into a block design.

### Theoretical Background in fMRI

First some terminology. An experimental condition consists of a number of "trials" (replications of that condition). The time between the onset of successive trials is the ITI. A trial consists of one or more components. These components may be brief bursts of neural activity (impulses, or "events"), or periods of sustained neural activity ("epochs"). A working memory trial, for example, may consist of stimulus (event), a retention interval (epoch) and a response (event). For consistency with previous literature, the time between the onsets of components will be referred to as the Stimulus Onset Asynchrony (SOA) - even if the components are not stimuli per se - whereas the time between the offset of one component and the onset of the next will be referred to as the Interstimulus Interval (ISI). Events are in fact assumed to have zero duration (i.e, are "delta functions"), so for trials consisting of single events, the SOA=ISI. (For epochs, SOA = SD + ISI, where SD is the stimulus duration). For more information about durations, i.e, events vs. epochs, see Common Question VII.

### Randomization

Because it is generally extremely difficult for experimenters to eliminate bias using only their expert judgment, the use of randomization in experiments is common practice. In a randomized experimental design, objects or individuals are randomly assigned (by chance) to an experimental group. Using randomization is the most reliable method of creating homogeneous treatment groups, without involving any potential biases or judgments. There are several variations of randomized experimental designs, two of which are briefly discussed below.

### Completely Randomized Design

In a completely randomized design, objects or subjects are assigned to groups completely at random. One standard method for assigning subjects to treatment groups is to label each subject, then use a table of random numbers to select from the labelled subjects. This may also be accomplished using a computer. In MINITAB, the "SAMPLE" command will select a random sample of a specified size from a list of objects or numbers.

### Randomized Block Design

If an experimenter is aware of specific differences among groups of subjects or objects within an experimental group, he or she may prefer a randomized block design to a completely randomized design. In a block design, experimental subjects are first divided into homogeneous blocks before they are randomly assigned to a treatment group. If, for instance, an experimenter had reason to believe that age might be a significant factor in the effect of a given medication, he might choose to first divide the experimental subjects into age groups, such as under 30 years old, 30-60 years old, and over 60 years old. Then, within each age level, individuals would be assigned to treatment groups using a completely randomized design. In a block design, both control and randomization are considered.
Example

A researcher is carrying out a study of the effectiveness of four different skin creams for the treatment of a certain skin disease. He has eighty subjects and plans to divide them into 4 treatment groups of twenty subjects each. Using a randomized block design, the subjects are assessed and put in blocks of four according to how severe their skin condition is; the four most severe cases are the first block, the next four most severe cases are the second block, and so on to the twentieth block. The four members of each block are then randomly assigned, one to each of the four treatment groups.
(Example taken from Valerie J. Easton and John H. McColl's Statistics Glossary v1.1)

### Replication

Although randomization helps to insure that treatment groups are as similar as possible, the results of a single experiment, applied to a small number of objects or subjects, should not be accepted without question. Randomly selecting two individuals from a group of four and applying a treatment with "great success" generally will not impress the public or convince anyone of the effectiveness of the treatment. To improve the significance of an experimental result, replication, the repetition of an experiment on a large group of subjects, is required. If a treatment is truly effective, the long-term averaging effect of replication will reflect its experimental worth. If it is not effective, then the few members of the experimental population who may have reacted to the treatment will be negated by the large numbers of subjects who were unaffected by it. Replication reduces variability in experimental results, increasing their significance and the confidence level with which a researcher can draw conclusions about an experimental factor.

(Taken from yale.edu)

## Base line [^4]

In psychological research a baseline is a measurement of the variable of interest at the beginning of treatment or a study that is used to compare to later measurements in order to judge the effectiveness of the treatment or conditions. For example, a clinical psychologist wants to see how effective a new type of therapy is for anxiety. For their study, they measure the anxiety levels of the participants by using a specific test that has been shown to be effective at measuring anxiety. The clinician then starts the new therapy method and uses the same anxiety measure every month and compares the scores to the baseline measurement in order to gauge its effectiveness as a treatment. If the participants' anxiety levels have been reduced from the baseline score then the therapy could be said to be effective. If the anxiety levels are unchanged or higher then the clinician may want to not use this method in the future.

### Morphometric Methods

It relate to ways of statistically identifying and characterizing structural differences among populations, or for finding correlations between brain shape and, for example, disease severity. Ther are three principle morphometric methods:

1. Voxel- based,
2. Deformation-based,
3. Tensor-based
4. Surface-based morphometry (SBM)
5. Region- or label-based morphometry (RBM)

---

## Usin CAT Tool Box [^10]

#### Voxel-based morphometry (VBM)Voxel-based morphometry (VBM)

VBM provides the voxel-wise estimation of the local amount or volume of a specific tissue compartment (Ashburner 2005). VBM is most often applied to investigate the local distribution of grey matter, but can also be used to examine white matter. However, the sensitivity for finding effects in white matter is rather low and there exist more appropriate methods (e.g. DTI) for that purpose.

#### Deformation-based morphometry (DBM)

DBM is based on the application of non-linear registration procedures to spatially normalise one brain to another one. The simplest case of spatial registration is to correct the orientation and size of the brains. In addition to these global changes, a non-linear registration is necessary to minimise the remaining regional differences by means of local deformations. If this local adaptation is possible, the deformations now reveal information about the type and localization of the structural differences between the brains and can undergo subsequent analysis.

Differences between both images are minimized and are now coded in the deformations. Finally, a map of local volume changes can be quantified by a mathematical property of these deformations - the Jacobian determinant. This parameter is well known from continuum mechanics and is usually used for the analysis of volume changes in flowing liquids or gases. The Jacobian determinant allows a direct estimation of the percentage change in volume in each voxel and can be statistically analyzed (Gaser et al. 2001). This approach is also known as tensor-based morphometry because the Jacobian determinant represents such a tensor.

A deformation-based analysis can be carried out not only on the local changes in volume but also on the entire information of the deformations, which also includes the direction and strength of the local deformations (Gaser et al. 1999). Since each voxel contains three-dimensional information, a multivariate statistical test is necessary for analysis. A multivariate general linear model or Hotelling’s T2 test is commonly used for this type of analysis (Gaser et al. 1999).

```
Deformation-based morphometry (DBM) is a method for identifying macroscopic
anatomical differences among the brains of different populations of subjects. The method involves spatially normalizing the structural MR images of a number of subjects so that they all conform to the same stereotaxic space. Multivariate statistics are then applied to the parameters describing the estimated nonlinear deformations that ensue.
```

#### Surface-based morphometry (SBM)

Surface-based morphometry has several advantages over using volumetric data alone. For instance, brain surface meshes have been shown to increase the accuracy of brain registration compared with Talairach registration (Desai et al. 2005). Brain surface meshes also permit new forms of analyses, such as gyrification indices that measure surface complexity in 3D (Yotter et al. 2011b) or cortical thickness. Furthermore, inflation or spherical mapping of the cortical surface mesh raises the buried sulci to the surface so that mapped functional activity in these regions can be easily visualized.

#### Region- or label-based morphometry (RBM)

CAT12 also allows estimation of regional tissue volumes (and optionally cortical thickness values) for different volume and surface-based atlas maps. The idea of this approach is that regions of interest (ROIs) can be defined once in an atlas brain and can be then mapped to the individual brain by using a high-dimensional spatial registration. This approach is also known as label- or region-based morphometry.

CAT12 provides different volume- as well as surface-based atlases with several predefined ROIs.

#### CAT toolbox of spm

Quality assurance (QA)
Preprocessing of magnetic resonance (MR) images strongly depends on the quality of the input data. Especially multi-center studies and data-sharing projects need to take into account varying image properties due to different scanners, sequences and protocols.

CAT introduces a novel retrospective QA framework for empirical quantification of quality differences in different scans or studies. Retrospective QA allows the evaluation of essential image parameters such as noise, inhomogeneities, and image resolution. All these quality measures will be scaled to a rating scale which easily allows to compare measures across different scanners and sequences. Furthermore, all quality measures are summarised to a single quality rating.

## Spatial and Temporal ?

- Spatial refers to `place`.
- Temporal refers to `time`.

##

## Two photon microscopy []

IMAGE CONTRAST IN MRI
In order for a pathology (or any process for that matter) to be visible in MRI, there
must be contrast or a difference in signal intensity between it and the adjacent tissue.
Signal contrasts can arise in MRI from differences in four basic physical parameters:
• ρ: The spin density of the various tissues/fluids being analyzed
• T1: The time constant with which the spin magnetization of a given tissue
will build up after being saturated/inverted/pulsed-away
• T2

- : The time constant with which the spins’ signals arising from a given
  tissue will diphase due to inhomogeneous broadening –this is the kind of
  signal decay that can be echoed away by π pulses; for instance the one
  arising from field inhomogeneities or susceptibility differences
  • T2: The (longer) time constant with which the spins’ signals arising from
  a given tissue will decay away due to homogeneous broadening – this is the
  kind of irreversible decay that can’t be echoed away, arising from
  microscopic random fluctuations in the magnetic field.

## PSF: Point Spread Funciton [^5]

Acronym for Point Spread Function (the Point spread function). The PSF represents the spatial distribution of the light intensity in the image of an optical system, formed from a point source object plane. More the image formed from the point source (PSF) is ad hoc form, the optical system is "faithful". Even for a 'perfect' optics, devoid of optical aberrations, the PSF is not a point pais a disk called Airy task, due to the effects of diffraction by the edges of the opening of the light waves. Depending on the light source (mono or polychromatic), the PSF can be calculated for a wavelength (monochromatic) or a set of (polychromatic) wavelength.

## Temporal PSF: [^6]

Temporal PSF famous example is of an fMRI response (BOLD-fMRI), which measures hemodynamic changes in the brain in respose to an external task or simulus.

The discussion focused on spatial PSFs which are easy to visualize. However, the imaging process also has a temporal PSF. A very famous example of this is obtained in blood oxygenation level dependent functional MRI (BOLD-fMRI)
experiments, which measure hemodynamic changes in the brain in response to an external “task” or “stimulus”. For example, a particular "input" is turned on - say, a particular flashing light – and an “MRI signal” is measured from a
region of interest - say, the visual cortex. The visual cortex will almost always get activated in response to the flashing lights, meaning we will see a
temporal change in the measured signal (the meaning of which we will discuss in-depth later on in the course). This signal usually looks as if it was
convolved with a temporal PSF that has a width of several seconds, meaning that BOLD-fMRI has a point spread function a few seconds wide which
looks like this:

![fmri-response](/images/neuroscience/fMRI-responce.png)

## ANOVA [^6]

Analysis of variance (ANOVA) is a collection of statistical models and their associated estimation procedures (such as the "variation" among and between groups) used to analyze the differences among group means in a sample. ANOVA was developed by statistician and evolutionary biologist Ronald Fisher. In the ANOVA setting, the observed variance in a particular variable is partitioned into components attributable to different sources of variation. In its simplest form, ANOVA provides a statistical test of whether the population means of several groups are equal, and therefore generalizes the t-test to more than two groups. ANOVA is useful for comparing (testing) three or more group means for statistical significance. It is conceptually similar to multiple two-sample t-tests, but is more conservative, resulting in fewer type I errors,[1] and is therefore suited to a wide range of practical problems.

---

## Introduction to SPM statistics

> Note: It is hard in the begenning because of its design from the start. It is for those who already have a good concept in maths and image processing and statistics. Neverthless it can be understood

- SPM crates statistics by doing a separate statistical analysis for each voxel like other functional imaging programs, It analysis each voxel independently inorder to make t-statistics and z-scores by:

  - analysing of variance `separately at each voxel`
  - makes `t` statistics from the result of this analysis for each voxel
  - works out a `z-score` equivalent for the `t-statistics`
  - showing an image of the statistics or equivalent z scores
  - suggests a correction to the significance of the statistics or z scores with takes accont of the multiple comparaison in the image.

```txt
Thus, in SPM:

observation = a voxel value, in the voxel we are analysing, for one scan;

response variable = data for all the scans for one voxel (i.e. all the observations);

predictor variable = covariate = effect.
```

### PET and fMRI

The example I will be using for this page is a single subject PET analysis. This is because a PET analysis is a little simpler than a typical within subject fMRI analysis. One reason that PET data are simpler than fMRI is that, for PET, the observations (voxel values) are nearly independent. By this I mean that the signal that generated the voxel value (VV) for one scan has more or less decayed to negligible levels by the time of the next scan. Thus the VV from the second scan is a measure of the signal at that voxel that is independent of the VV from the first scan. The same is true in analyses that have a different image for each subject, as is often the case for random effect analyses. However, for fMRI scans within a scan session, the spacing between scans is often very short. In this case the signal that generated one scan may still be present at the time of the next. This means that time-series approaches must be used with these data, which complicates the maths. However, the underlying principles that I describe here for PET also apply to fMRI.

continue reading [here](http://imaging.mrc-cbu.cam.ac.uk/imaging/PrinciplesStatistics#statstart). It is important that you understand what you are doing.

### Design Matrix, Parameter Matrix, Error matrix

## Contrasts [^7] a basic [introduction](/files/contrasts.pdf)

- [contrast](/files/Contrast-in-detail.pdf) in detail.

- What do contrast do?

  GLM `General Linera Model` looks at the relationship between experimental manipulation and the observed data. Multiple effects within the same design matrix focusing in on a particular characterstics, condition or regressor. And for this purpose we use contrasts.

  t-tests: (t is written in small letter) It tells us whetehr there is significant increase or decrese in the contrast specified.

  F-test: (F is written in capital) It tells us whether there is a significant difference between the conditions in the contrast (the effect of a group of regressors)
  t-Contrast are directional while F-contrast are not.
  F-contrast are used to test a hypothesis about general effects, independent of the direction fo the contrast. It is also used for collectoin of t-contrasts that you want to test together.

For general linear model Y = XB + E with data Y, design matrix X, parameter vector B, and (independent) errors E, a contrast is a linear combination of the parameters c’B. Usually c is a column vector, defining a simple contrast of the parameters, assessed via an SPM{T}. More generally, c can be also a matrix, defining an “F-contrast” assessed via an SPM{F}.
The vector/matrix c contains the contrast weights and must be specified to define the contrast. `

- The null hypothesis is that the linear combination c’B is zero. [0 1 -1].
- The order of the parameters in the parameter (column) vector B, and hence the order to which parameters are referenced in the contrast weights vector c, is determined by the construction of the design matrix.
  There are two types of contrast in SPM: simple contrasts for SPM{T}, and “F-contrasts” for SPM{F}. For a thorough theoretical treatment, see the Human Brain Function book and the statistical literature referenced therein.
  To demonstrate the use of the contrast vector I have prepared some examples.

### More about contrast

- You can think of your contrasts this way: in PET, for each of the conditions, for each voxel, SPM calculates the `mean signal` level for that condition. The _contrasts tell SPM how to subtract these means_, to look at the particular comparison/s you are interested in.

- For example a contrast of [-1 1 0 0] in an analysis with four conditions equates to the mean PET activity, voxel by voxel, of condition 1 subtracted from the mean PET activity of condition 2 (i.e. Condition 2 minus Condition 1). Here is an example of a set of contrasts using a standard four conditions design:

  - Condition 1: Language task
  - Condition 2: Memory task
  - Condition 3: Motor task
  - Condition 4: Control

> these contrast are attempting to see what significantly increased areas of regional cerebral blood flow - rCBF - are found:

- **Contrast 1** Language minus Control [1 0 0 -1]
  When the `rCBF` of the control task is subtracted from language.

- **Contrast 2** Motor minus Memory [0 -1 1 0]
  When the `rCBF` of the Motor task is subtracted from the language.

- **contrast 3** Control minus Motor [0 0 -1 1]
  when the `rCBF` of the Control is subtracted from the Motor

- **Contrast 4** (Language + Memory) minus Control [ 1 1 0 -2]
  This contrast will measure areas of the brain that have significantly increased activity in the average of the language and memory conditions, compared with the control task

---

## Another example of contrast

```
sample1   sample2   sample3
[s1,s2,s3]
1 0 0
1 0 0
0 1 0
0 1 0
0 0 1
0 0 1
```

### Defining T-contrasts

- sample2>sample1 [-1 1 0 ]

- sample1>sample3 [1 0 -1 ]

- sample1>(sample2 + sample3) [ 2 -1 -1 ]

### Defining F-contrast

2/3
-1/3
-1/3 -1/3
2/3
-1/3 -1/3
-1/3
2/3 any difference between the samples

#### Ancova

sample1 sample2 covariate1
1 0 1
1 0 2
1 0 3
0 1 4
0 1 5
0 1 6

### T-contrasts

-1 1 0 sample2 > sample1 (without confounding effects of covariate 1)
1 -1 0 sample1 > sample2 (without confounding effects of covariate 1)

#### F-contrast

0.5
-0.5 -0.5
0.5 0
0 any difference between sample1 and sample2 (without confounding effects of covariate)

#### Simple regression

Please take care that the columns are switched if you use the default ‘Multiple regression’ design. In this case covariate is in column 1 followed by sample-1 and you also have to switch the contrast vector.

sample1 covariate
1 1
1 2
1 3
1 4
1 5
1 6

### T-contrasts

0 1 positive correlation with covariate 1
0 -1 negative correlation with covariate 1

#### Interaction

sample1 sample2 covariate1@sF21 covariate1@sF22
1 0 1 0
1 0 2 0
1 0 3 0
0 1 0 4
0 1 0 5
0 1 0 6

### T-contrasts

0 0 -1 1 regression slope sample2 > sample1
0 0 1 -1 regression slope sample1 > sample2

### F-contrast

0
0 0
0 -0.5
0.5 0.5
-0.5 any difference between regression slopes

- F-contrast: Effects of interest
  If you would like to use the old SPM2 F-contrast “Effects of interest” the respective contrast vector is:
  eye(n)-1/n

- where n is the number of columns of interest. This F-contrast is often helpful for plotting parameter estimates of effects of interest.

---

### What are EPrime and Qualtrics.com

### What are requirement management tool

### Work Cited

[^1]: [@Valerie J. Easton and John H. McColl's Statistics Glossary v1.1]
[^2]: [@yale .edu.]
[^3]: [@Valerie J. Easton and John H. McColl's Statistics Glossary v1.1]
[^4]: [https://www.alleydog.com/glossary/definition.php?term=Baseline]
[^5]: [@Dr.Damien Gatinel]
[^6]: [@wickipida]
[^7]: [@ Structural Brain Mapping Group]
[^10]: [http://dbm.neuro.uni-jena.de/cat/]

## Conclusion

---

## FAQ
