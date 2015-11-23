BEGIN TRANSACTION;
CREATE TABLE `Tag` (
	`Tag_ID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`Tag_Keyword`	TEXT NOT NULL
);
INSERT INTO `Tag` VALUES (1,'minimum hitting set');
INSERT INTO `Tag` VALUES (2,'hypergraph transversal');
INSERT INTO `Tag` VALUES (3,'MHS');
INSERT INTO `Tag` VALUES (4,'parallel');
INSERT INTO `Tag` VALUES (5,'reverse engineering');
INSERT INTO `Tag` VALUES (6,'cell biology');
CREATE TABLE `Datatype` (
	`Datatype_ID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`Datatype_Name`	INTEGER NOT NULL
);
INSERT INTO `Datatype` VALUES (1,'algorun:sets');
INSERT INTO `Datatype` VALUES (2,'algorun:superadam');
CREATE TABLE `Algo_Tag` (
	`Algo_ID`	INTEGER NOT NULL,
	`Tag_ID`	INTEGER NOT NULL,
	PRIMARY KEY(Algo_ID,Tag_ID),
	FOREIGN KEY(`Algo_ID`) REFERENCES Algo(Algo_ID),
	FOREIGN KEY(`Tag_ID`) REFERENCES Tag(Tag_ID)
);
INSERT INTO `Algo_Tag` VALUES (1,1);
INSERT INTO `Algo_Tag` VALUES (1,2);
INSERT INTO `Algo_Tag` VALUES (1,3);
INSERT INTO `Algo_Tag` VALUES (1,4);
INSERT INTO `Algo_Tag` VALUES (2,1);
INSERT INTO `Algo_Tag` VALUES (2,2);
INSERT INTO `Algo_Tag` VALUES (2,3);
INSERT INTO `Algo_Tag` VALUES (3,1);
INSERT INTO `Algo_Tag` VALUES (3,2);
INSERT INTO `Algo_Tag` VALUES (3,3);
INSERT INTO `Algo_Tag` VALUES (4,1);
INSERT INTO `Algo_Tag` VALUES (4,2);
INSERT INTO `Algo_Tag` VALUES (4,3);
INSERT INTO `Algo_Tag` VALUES (5,1);
INSERT INTO `Algo_Tag` VALUES (5,2);
INSERT INTO `Algo_Tag` VALUES (5,3);
INSERT INTO `Algo_Tag` VALUES (6,1);
INSERT INTO `Algo_Tag` VALUES (6,2);
INSERT INTO `Algo_Tag` VALUES (6,3);
INSERT INTO `Algo_Tag` VALUES (7,1);
INSERT INTO `Algo_Tag` VALUES (7,2);
INSERT INTO `Algo_Tag` VALUES (7,3);
INSERT INTO `Algo_Tag` VALUES (8,1);
INSERT INTO `Algo_Tag` VALUES (8,2);
INSERT INTO `Algo_Tag` VALUES (8,3);
INSERT INTO `Algo_Tag` VALUES (8,4);
INSERT INTO `Algo_Tag` VALUES (9,1);
INSERT INTO `Algo_Tag` VALUES (9,2);
INSERT INTO `Algo_Tag` VALUES (9,3);
INSERT INTO `Algo_Tag` VALUES (10,1);
INSERT INTO `Algo_Tag` VALUES (10,2);
INSERT INTO `Algo_Tag` VALUES (10,3);
INSERT INTO `Algo_Tag` VALUES (10,4);
INSERT INTO `Algo_Tag` VALUES (11,1);
INSERT INTO `Algo_Tag` VALUES (11,2);
INSERT INTO `Algo_Tag` VALUES (11,3);
INSERT INTO `Algo_Tag` VALUES (11,4);
INSERT INTO `Algo_Tag` VALUES (12,1);
INSERT INTO `Algo_Tag` VALUES (12,2);
INSERT INTO `Algo_Tag` VALUES (12,3);
INSERT INTO `Algo_Tag` VALUES (12,4);
INSERT INTO `Algo_Tag` VALUES (13,1);
INSERT INTO `Algo_Tag` VALUES (13,2);
INSERT INTO `Algo_Tag` VALUES (13,3);
INSERT INTO `Algo_Tag` VALUES (14,5);
INSERT INTO `Algo_Tag` VALUES (14,6);
INSERT INTO `Algo_Tag` VALUES (15,5);
INSERT INTO `Algo_Tag` VALUES (15,6);
INSERT INTO `Algo_Tag` VALUES (16,5);
INSERT INTO `Algo_Tag` VALUES (16,6);
INSERT INTO `Algo_Tag` VALUES (17,5);
INSERT INTO `Algo_Tag` VALUES (17,6);
INSERT INTO `Algo_Tag` VALUES (18,5);
INSERT INTO `Algo_Tag` VALUES (18,6);
CREATE TABLE "Algo_Datatype" (
	`Algo_ID`	INTEGER NOT NULL,
	`Datatype_ID`	INTEGER NOT NULL,
	PRIMARY KEY(Algo_ID,Datatype_ID),
	FOREIGN KEY(`Algo_ID`) REFERENCES Algo ( Algo_ID ),
	FOREIGN KEY(`Datatype_ID`) REFERENCES Datatype ( Datatype_ID )
);
INSERT INTO `Algo_Datatype` VALUES (1,1);
INSERT INTO `Algo_Datatype` VALUES (2,1);
INSERT INTO `Algo_Datatype` VALUES (3,1);
INSERT INTO `Algo_Datatype` VALUES (4,1);
INSERT INTO `Algo_Datatype` VALUES (5,1);
INSERT INTO `Algo_Datatype` VALUES (6,1);
INSERT INTO `Algo_Datatype` VALUES (7,1);
INSERT INTO `Algo_Datatype` VALUES (8,1);
INSERT INTO `Algo_Datatype` VALUES (9,1);
INSERT INTO `Algo_Datatype` VALUES (10,1);
INSERT INTO `Algo_Datatype` VALUES (11,1);
INSERT INTO `Algo_Datatype` VALUES (12,1);
INSERT INTO `Algo_Datatype` VALUES (13,1);
INSERT INTO `Algo_Datatype` VALUES (14,2);
INSERT INTO `Algo_Datatype` VALUES (15,2);
INSERT INTO `Algo_Datatype` VALUES (16,2);
INSERT INTO `Algo_Datatype` VALUES (17,2);
INSERT INTO `Algo_Datatype` VALUES (18,2);
CREATE TABLE `Algo` (
	`Algo_ID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`Algo_Name`	TEXT NOT NULL,
	`Algo_Manifest`	TEXT NOT NULL
);
INSERT INTO `Algo` VALUES (1,'AGDMHS','{
    "algo_name": "AGDMHS",
    "algo_summary": "C++ implementations of various MHS algorithms",
    "algo_description": "Available algorithms: <ul><li><code>pmmcs</code>: parallelized version of the MMCS algorithm. Serial version introduced in <a href=\"//doi.org/10.1016/j.dam.2014.01.012\">Efficient algorithms for dualizing large-scale hypergraphs</a> by Murakami and Uno.</li><li><code>prs</code>: parallelized version of the RS algorithm. Serial version introduced in <a href=\"//doi.org/10.1016/j.dam.2014.01.012\">Efficient algorithms for dualizing large-scale hypergraphs</a> by Murakami and Uno.</li><li><code>fka</code>: the A algorithm from <a href=\"//doi.org/10.1006/jagm.1996.0062\">On the complexity of dualization of monotone disjunctive normal forms</a>, Fredman, M. and Khachiyan, L.</li><li><code>berge</code>: sequential algorithm, widely published, i.e. in <i>Hypergraphs: combinatorics of finite sets</i>, C. Berge, 1984.</li><li><code>bm</code>: global parallel algorithm from <a href=\"//doi.org/10.1007/978-3-642-02927-1_17\">A fast and simple parallel algorithm for the monotone duality problem</a> by E. Boros and K. Makino.</li></ul>",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS", "parallel"],
    "algo_authors": [
        {
            "name": "Andrew Gainer-Dewar, Ph.D.",
            "email": "andrew.gainer.dewar@gmail.com",
            "personal_website": "https://github.com/agdphd",
            "organization": "UConn Health Center for Quantitative Medicine",
            "org_website": "cqm.uchc.edu"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "ALGORITHM": "pmmcs",
        "THREADS": "1",
        "CUTOFF_SIZE": "0"
    },
    "algo_image": "compsysmed/agdmhs"
}');
INSERT INTO `Algo` VALUES (2,'BMR','{
    "algo_name": "BMR",
    "algo_summary": "BMR algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//doi.org/10.1109/ICDM.2003.1250958\">A fast algorithm for computing hypergraph transversals and its application in mining emerging patterns</a> by Bailey, Manoukian, and Ramamohanarao.",
    "algo_website": "http://www.computer.org/csdl/proceedings/icdm/2003/1978/00/19780485.pdf",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Keisuke Murakami",
            "email": "murakami@nii.ac.jp",
            "organization": "National Institute of Informatics, Tokyo"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_image": "compsysmed/bmr"
}');
INSERT INTO `Algo` VALUES (3,'DL','{
    "algo_name": "DL",
    "algo_summary": "DL algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//doi.org/10.1007/s10115-004-0178-1\">Mining border descriptions of emerging patterns from dataset pairs</a> by Dong and Li.",
    "algo_website": "http://research.nii.ac.jp/~uno/code/shd.html",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Keisuke Murakami",
            "email": "murakami@nii.ac.jp",
            "organization": "National Institute of Informatics, Tokyo"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_image": "compsysmed/dl"
}');
INSERT INTO `Algo` VALUES (4,'FK','{
    "algo_name": "FK",
    "algo_summary": "FK algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//doi.org/10.1006/jagm.1996.0062\">On the complexity of dualization of monotone disjunctive normal forms</a>, Fredman, M. and Khachiyan, L. Implementation details in <a href=\"//doi.org/10.1016/j.dam.2006.04.012\">An efficient implementation of a quasi-polynomial algorithm for generating hypergraph transversals and its application in joint generation</a>, Khachiyan, L. et al.",
    "algo_website": "//rutcor.rutgers.edu/~boros/IDM/DualizationCode.html",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Endre Boros",
            "email": "boros@rutcor.rutgers.edu",
            "organization": "RUTCOR"
        },
        {
            "name": "Khaled Elbassioni",
            "email" : "elbassio@people.mpi-inf.mpg.de",
            "organization": "Max-Planck-Institut fÃ¼r Informatik"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_image": "compsysmed/fka-begk"
}');
INSERT INTO `Algo` VALUES (5,'HBC','{
    "algo_name": "HBC",
    "algo_summary": "HBC algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//www.infona.pl/resource/bwmeta1.element.baztech-article-BUS5-0014-0020\">A data mining formalization to improve hypergraph minimal transversal computation</a> (<a href=\"//cremilleux.users.greyc.fr/papers/FundInfoFinal07.pdf\">PDF</a>) by HÃ©bert, Bretto, and CrÃ©milleux.",
    "algo_website": "//forge.greyc.fr/projects/kdariane/wiki/Mtminer",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "CÃ©line HÃ©bert",
            "email": "celine.hebert@info.unicaen.fr",
            "organization": "UniversitÃ© de Caen"
        },
        {
            "name": "FranÃ§ois Rioult",
            "email": "francois.rioult@unicaen.fr",
            "personal_website": "//www.greyc.fr/users/rioultf",
            "organization": "UniversitÃ© de Caen (GREYC)",
            "org_website": "//www.greyc.fr"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_image": "compsysmed/hbc"
}');
INSERT INTO `Algo` VALUES (6,'HTC-BDD','{
    "algo_name": "HTC-BDD",
    "algo_summary": "HTC-BDD algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//doi.org/10.1007/978-3-642-38527-8_10\">Hypergraph transversal computation with binary decision diagrams</a> by T. Toda. Available algorithms:<ul><li><code>toda</code>Full HTC-BDD algorithm.</li><li><code>knuth</code>Knuth algorithm from Knuth''s ''The Art of Computer Programming'' vol. 4 Â§7.1.4.</li></ul>''",
    "algo_website": "//www.sd.is.uec.ac.jp/toda/htcbdd.html",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Takahisa Toda",
            "email": "toda.takahisa@gmail.com",
            "personal_website": "//www.sd.is.uec.ac.jp/toda",
            "organization": "Discrete Structure Manipulation System Project, Japan Science and Technology Agency, Hokkaido University,",
            "org_website": "//www.sd.is.uec.ac.jp"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "MODE": "toda"
    },
    "algo_image": "compsysmed/htcbdd"
}');
INSERT INTO `Algo` VALUES (7,'KS','{
    "algo_name": "KS",
    "algo_summary": "KS algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//doi.org/10.7155/jgaa.00107\">An efficient algorithm for the transversal hypergraph generation</a> by Kavvadias and Stavropoulos.",
    "algo_website": "http://lca.ceid.upatras.gr/~estavrop/transversal/",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Elias C. Stavropoulos",
            "email": "estavrop@ceid.upatras.gr",
            "organization": "Department of Computer Engineering and Informatics, University of Patras",
            "org_website": "www.ceid.upatras.gr"
        },
        {
            "name": "Dimitris J. Kavvadias",
            "email": "kavadias@ceid.upatras.gr",
            "organization": "Department of Computer Engineering and Informatics, University of Patras",
            "org_website": "www.ceid.upatras.gr"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_image": "compsysmed/ks"
}');
INSERT INTO `Algo` VALUES (8,'MHS2','{
    "algo_name": "MHS2",
    "algo_summary": "MHSÂ² algorithm for minimal hitting set computations",
    "algo_description": "Introduced in \"An efficient distributed algorithm for computing minimal hitting sets\" (<a href=\"//dx-2014.ist.tugraz.at/papers/DX14_Mon_PM_S1_paper1.pdf\">PDF</a>) by Cardoso and Abreu. Can be run in multiple threads.",
    "algo_website": "https://github.com/npcardoso/MHS2",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS", "parallel"],
    "algo_authors": [
        {
            "name": "Nuno Cardoso",
            "email": "nunopcardoso@gmail.com",
            "personal_website": "https://github.com/npcardoso",
            "organization": "University of Porto",
            "org_website": ""
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "THREADS": "1",
        "CUTOFF_SIZE": "0"
    },
    "algo_image": "compsysmed/mhs2"
}');
INSERT INTO `Algo` VALUES (9,'OCSANA-Greedy','{
    "algo_name": "OCSANA-Greedy",
    "algo_summary": "Greedy algorithm from OCSANA",
    "algo_description": "A greedy algorithm for finding minimal hitting sets. Introduced in <a href=\"//doi.org/10.1093/bioinformatics/btt195\">OCSANA: optimal combinations of interventions from network analysis</a> by Vera-Licona, Bonnet, Barillot, and Zinovyev. <b><i>WARNING</i></b>: Testing has revealed that this sofwtare does not accurately generate all MHSes.",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Paola Vera-Licona",
            "email": "veralicona@uchc.edu",
            "personal_website": "//compsysmed.org",
            "organization": "UConn Health Center for Quantitative Medicine",
            "org_website": "cqm.uchc.edu"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "CUTOFF_SIZE": "0"
    },
    "algo_image": "compsysmed/ocsanamhs"
}');
INSERT INTO `Algo` VALUES (10,'ParTran','{
    "algo_name": "ParTran",
    "algo_summary": "ParTran algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"http://doi.org/10.1145/1837210.1837221\">Parallel computation of the minimal elements of a poset</a>. Can be run in multiple threads. <b><i>WARNING</i></b>: Testing has revealed that this sofwtare does not accurately generate all MHSes.",
    "algo_website": "//bpaslib.org",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS", "parallel"],
    "algo_authors": [
        {
            "name": "BPAS team",
            "email": "bpas@scl.csd.uwo.ca",
            "organization": "Symbolic Computation Laboratory",
            "org_website": "//scl.csd.uwo.ca"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "THREADS": "1"
    },
    "algo_image": "compsysmed/partran"
}');
INSERT INTO `Algo` VALUES (11,'PrimDecomp','{
    "algo_name": "PrimDecomp",
    "algo_summary": "Algebraic calculation of MHSes",
    "algo_description": "Computes minimal hitting sets using an algebraic formulation. Specifically, we construct a monomial ideal with one generating monomial for each edge to hit, then compute its associated primes, which correspond to MHSes. This is implemented in Macaulay2.",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS", "parallel"],
    "algo_authors": [
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_image": "compsysmed/primdecomp"
}');
INSERT INTO `Algo` VALUES (12,'PyMBD','{
    "algo_name": "PyMBD",
    "algo_summary": "Various algorithms for MHS computations",
    "algo_description": "Introduced in \"PyMBD: a library of MBD algorithms and a light-weight evaluation platform\" (<a href=\"//dx-2014.ist.tugraz.at/papers/DX14_Tue_PM_tool_paper2.pdf\">PDF</a>) by Quaritsch and Pill. Available algorithms are: <ul><li><tt>bool-iterative</tt> from <a href=\"//dx.doi.org/10.1016/S0020-0190(02)00506-9\">\"The computation of hitting sets: review and new algorithms\"</a> by Lin and Jiang,</li><li><tt>hsdag</tt> from <a href=\"//dx.doi.org/10.1016/0004-3702(89)90079-9\">A correction to the algorithm in Reiter''s theory of diagnosis</a> by Greiner, Smith, and Wilkerson,</li><li><tt>hst</tt> from <a href=\"//dx.doi.org/10.1016/S0020-0190(00)00166-6\">A variant of Reiter''s hitting-set algorithm</a> by Wotawa, and</li><li><tt>staccato</tt> from \"A low-cost approximate minimal hitting set algorithm and its application to model-based diagnosis\" (<a href=\"//haslab.uminho.pt/ruimaranhao/files/sara09.pdf\">PDF</a>) by Abreu and Gemund.</li></ul>",
    "algo_website": "",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS", "parallel"],
    "algo_authors": [
        {
            "name": "Thomas Quaritsch",
            "email": "thomas.quaritsch@htlpinkafeld.at",
            "personal_website": "http://thomas.quaritsch.at/",
            "organization": "HTL Pinkafeld",
            "org_website": "//www.htlpinkafeld.at/htluvapinkafeld/"
        },
        {
            "name": "Ingo Pill",
            "email": "ipill@ist.tugraz.at",
            "personal_website": "http://www.ist.tugraz.at/pill/",
            "organization": "Institute for Software Technology, Graz University of Technology",
            "org_website": "//www.ist.tugraz.at"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "ALGORITHM_NAME": "bool-recursive",
        "CUTOFF_SIZE": "0"
    },
    "algo_image": "compsysmed/pymbd"
}');
INSERT INTO `Algo` VALUES (13,'SHD','{
    "algo_name": "SHD",
    "algo_summary": "SHD algorithm for minimal hitting set computations",
    "algo_description": "Introduced in <a href=\"//doi.org/10.1016/j.dam.2014.01.012\">Efficient algorithms for dualizing large-scale hypergraphs</a> by Murakami and Uno. Can be run in ''mmcs'' or ''rs'' mode.",
    "algo_website": "//research.nii.ac.jp/~uno/code/shd.html",
    "algo_keywords": ["minimum hitting set", "hypergraph transversal", "MHS"],
    "algo_authors": [
        {
            "name": "Takeaki Uno",
            "email": "uno@nii.jp",
            "personal_website": "//research.nii.ac.jp/~uno/",
            "organization": "National Institute of Informatics, Tokyo",
            "org_website": "//www.nii.jp"
        }
    ],
    "algo_exec": "./mhs",
    "algo_output_filename": "out.dat",
    "algo_parameters": {
        "CUTOFF_SIZE": "0",
        "MODE": "mmcs"
    },
    "algo_image": "compsysmed/shd"
}');
INSERT INTO `Algo` VALUES (14,'REACT','{
	"algo_name": "REACT",
	"algo_summary": "Evolutionary Algorithm for Discrete Dynamical System Optimization",
	"algo_description": "The inference of gene regulatory networks (GRNs) from system-level experimental observations is at the heart of systems biology due to its 
centrality in gaining insight into the complex regulatory mechanisms in cellular systems. This includes the inference of both the network topology and dynamic 
mathematical models. <br>This software contains a novel network inference algorithm within the algebraic framework of Boolean polynomial dynamical system (BPDS). The 
algorithm considers time series data, including that of perturbation experiments such as knock-out mutants and RNAi experiments. To infer the network topology and 
dynamic models, it allows for the incorporation of prior biological knowledge while being robust to significant levels of noise in the data used for inference. It uses 
an evolutionary algorithm for local optimization with an encoding of the mathematical models as BPDS.",
	"algo_website": "http://compsysmed.org/Software/EARevEng/REACT.html",
	"algo_keywords": ["reverse engineering", "cell biology"],
	"algo_authors": [
		{
			"name": "Paola Vera-Licona",
			"email": "veralicona@uchc.edu",
			"personal_website": "http://compsysmed.org/Homepage/Welcome.html",
			"organization": "Center for Quantitative Medicine, UConn Health",
			"org_website": "http://cqm.uchc.edu/"
		},
		{
			"name": "John J. McGee",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		}
	],
	"algo_exec": "ruby React.rb",
	"algo_output_filename": "output.txt",
	"algo_parameters": {
		"HammingPolyWeight": "0.5",
		"ComplexityWeight": "0.2",
		"RevEngWeight": "0",
		"BioProbWeight": "0",
		"HammingModelWeight": "0.35",
		"PolyScoreWeight": "0.65",
		"GenePoolSize": "100",
		"NumCandidates": "55",
		"NumParentsToPreserve": "5",
		"MaxGenerations": "100",
		"StableGenerationLimit": "50",
		"MutateProbability": "0.5"
	},
	"input_type": "algorun:superadam",
	"algo_image": "algorun/react"
}');
INSERT INTO `Algo` VALUES (15,'BNReduction','{
	"algo_name": "BNReduction",
	"algo_summary": "Tools for Steady State Computation of Boolean Networks",
	"algo_description": "BNReduction reliably determines all steady states of sparse Boolean networks with up to 1000 nodes. The algorithm is effective at 
analyzing virtually all published models even those of moderate connectivity. The problem for large Boolean networks with high average connectivity remains an open 
problem",
	"algo_website": "http://www.biomedcentral.com/1471-2105/15/221",
	"algo_keywords": ["reverse engineering", "cell biology"],
	"algo_authors": [
		{
			"name": "A. Veliz-Cuba",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		},
		{
			"name": "B. Aguilar",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		},
		{
			"name": "F. Hinkelmann",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		},
		{
			"name": "Reinhard Laubenbacher (PI)",
			"email": "laubenbacher@uchc.edu",
			"personal_website": "http://facultydirectory.uchc.edu/profile?profileId=Laubenbacher-Reinhard",
			"organization": "Center for Quantitative Medicine",
			"org_website": "http://cqm.uchc.edu/"
		}
	],
	"algo_exec": "ruby BNReduction.rb",
	"algo_output_filename": "output.txt",
	"algo_parameters": {
	},
	"input_type": "algorun:superadam",
	"algo_image": "algorun/bnreduction"
}');
INSERT INTO `Algo` VALUES (16,'Cyclone','{
	"algo_name": "Cyclone",
	"algo_summary": "Calculate Dynamics of a discrete dynamical system using exhaustive search",
	"algo_description": "",
	"algo_website": "https://github.com/PlantSimLab/cyclone",
	"algo_keywords": ["reverse engineering", "cell biology"],
	"algo_authors": [
		{
			"name": "Reinhard Laubenbacher (PI)",
			"email": "laubenbacher@uchc.edu",
			"personal_website": "http://facultydirectory.uchc.edu/profile?profileId=Laubenbacher-Reinhard",
			"organization": "Center for Quantitative Medicine",
			"org_website": "http://cqm.uchc.edu/"
		},
		{
			"name": "Brett Tyler (Co-PI)",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		},
		{
			"name": "John McDowell (Co-PI)",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		},
		{
			"name": "Stefan Hoops (Co-PI)",
			"email": "",
			"personal_website": "",
			"organization": "",
			"org_website": ""
		}
	],
	"algo_exec": "ruby Cyclone.rb",
	"algo_output_filename": "output.txt",
	"algo_parameters": {
	},
	"input_type": "algorun:superadam",
	"algo_image": "algorun/cyclone"
}');
INSERT INTO `Algo` VALUES (17,'SDDS','{
	"algo_name": "SDDS",
	"algo_summary": "Stochastic Discrete Dynamical System",
	"algo_description": "SDDS module simulates the average trajectory for each variable out of numberofSimulations trajectories deterministically or 
stochastically",
	"algo_website": "http://algorun.org",
	"algo_keywords": ["reverse engineering", "cell biology"],
	"algo_authors": [
		{
			"name": "Seda Arat",
			"email": "arat@uchc.edu",
			"personal_website": "http://www.math.vt.edu/people/sedag/",
			"organization": "Center for Quantitative Medicine",
			"org_website": "http://cqm.uchc.edu/"
		}
	],
	"algo_exec": "ruby Sdds.rb",
	"algo_output_filename": "output.txt",
	"algo_parameters": {
	},
	"input_type": "algorun:superadam",
	"algo_image": "algorun/sdds"
}');
INSERT INTO `Algo` VALUES (18,'BasicRevEng','{
	"algo_name": "BasicRevEng",
	"algo_summary": "My short description",
	"algo_description": "My long description",
	"algo_website": "http://algorun.org",
	"algo_keywords": ["reverse engineering", "cell biology"],
	"algo_authors": [
		{
			"name": "John Doe",
			"email": "john@doe.com",
			"personal_website": "http://johndoe.info",
			"organization": "John Doe University",
			"org_website": "http://johndoe.edu"
		},
		{
			"name": "Jim Doe",
			"email": "jim@doe.com",
			"personal_website": "http://jimdoe.info",
			"organization": "John Doe University",
			"org_website": "http://johndoe.edu"
		}
	],
	"algo_exec": "/usr/bin/M2script find-pds < ",
	"algo_output_filename": "stdout",
	"algo_parameters": {
	},
	"input_type": "algorun:superadam",
	"algo_image": "algorun/basicreveng"
}');
COMMIT;
