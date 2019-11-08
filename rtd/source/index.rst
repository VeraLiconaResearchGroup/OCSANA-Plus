OCSANA+
==========
OCSANA+ is a Cytoscape app for identifying driver nodes that control non-linear systems' 
long-term dynamics, prioritizing combinations of interventions in large scale complex networks, 
and estimating the effects of node perturbations in signaling networks, all based on the analysis of 
the network's structure. OCSANA+ includes an update to the previously introduced OCSANA (optimal combinations 
of interventions from network analysis) software tool with cutting-edge and rigorously tested algorithms, 
together with recently-developed structure-based control algorithms for non-linear systems and an algorithm 
for estimating the signal flow. All these algorithms are based on the network's topology.

++++++++++++++++++
OCSANA+ features:
++++++++++++++++++

**Optimal Combinations of Interventions**
OCSANA (Optimal Combinations of Interventions from Network Analysis), 
originally introduced in Vera-Licona et al., 2013, identifies and prioritizes 
optimal minimal combinations of interventions (CIs) that disrupt the elementary 
paths from selected source nodes to the specified target nodes. When indicated by the user, 
OCSANA seeks to additionally minimize the side-effects that CIs can cause on specified off-target nodes.

**Feedback Vertex Set Control**
Feedback Vertex Set Control (FC) is an attractor 
based control method specifically developed for networks 
with non-linear dynamics that uses a component of the network's 
topology, the Feedback Vertex Set (FVS) (Mochizuki et al., 2013 )The FVS of a network is defined as the 
minimal set of nodes whose removal would leave a graph without cycles. 
Later, an extended FC control version adding the the network’s source nodes was proposed by Zanudo et al., 2017.

**Signal Flow Analysis**
The SFA algorithm (Lee and Cho, 2018) estimates the steady state activity 
of a node by a linear difference equation that considers (i) The activity of a node at the previous time step, 
(ii) The effect (activating or inhibiting) and influence of incoming edges to a node, and (iii) the 
initial activities of the node


In this manual we include instructions for intallation, CI discovery, FC identification,
SFA analysis, and a walkthrough tutorial of the features of OCSANA+.

.. toctree::
   :caption: User Guide
   :maxdepth: 2

   install
   ocsana
   fc
   sfa
   walkthrough



