===================================================================
Walk-Through Example: Cell Fate Specification in Ascidian Embryo
===================================================================

In `Kobayashi et al., 2018 <https://www.ncbi.nlm.nih.gov/pubmed/30240747>`_, 
the authors performed FC analysis from `\Mochizuki et al2013 <https://www.ncbi.nlm.nih.gov/pubmed/23774067>`_ on a gene regulatory 
network (GRN) of seven tissues that specifies cell fates in embryos of the ascidian 
Ciona intestinalis (type A; also called Ciona robusta). After performing FC analysis, 
the authors identified five key molecules. By controlling the activities of these key molecules, 
the specific gene expression of six of seven tissues observed in the embryo was successfully 
reproduced.

In this example, we show how OCSANA+ can reproduce the FC 
analysis in addition to the results from control experiments in Ascidian embryos.
Additionally, we explore how the extended Feedback Vertex Set Control (FC) with source 
nodes (`Zanudo et al 2017 <https://www.ncbi.nlm.nih.gov/pubmed/28655847>`_) and OCSANA functionalities could increase 
the accuracy of simulated results.


..........................................................
Identifying Feedback Vertex Set Control Sets (FC)
..........................................................
1. load network into cytoscape
2. OCSANA drop down for FC
a. we will choose with source nodes, since we will be using them later
3. configure run. set to run x number of times, number of produced FCs may be less than the boundary 
selected, as there may be fewer in the network. 


...........................................................
Simulating FC node perturbations using SFA 
...........................................................
1. SFA dropdown
2. example: unperturbed initial state
3. example: 2nd perturbation
4. comparison of SFA results

....................................................................
Identifying Feedback Vertex Set Control Sets (FC) with source nodes
....................................................................

1.  as performed above, we have our set of source nodes

....................................................................
Identifying CIs with OCSANA
....................................................................
1. set source nodes to nodes
2. example: target node of Epi1
3. results

...........................................................
Simulating FC and CI node perturbations using SFA 
...........................................................
1. yay!