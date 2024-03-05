import config from "./../Entities/dev.config.json";

const onAnalyzeData = (selectedItems) => {
  let notebookContent = {
    cells: [
      {
        cell_type: "markdown",
        metadata: {},
        source: ["## Welcome to Biofilm DIDS"],
      },
      {
        cell_type: "markdown",
        metadata: {},
        source: [
          "Biofilm DIDS is a database designed to serve as a scientific platform for investigating biological responses to nano-scale coatings (e.g., crystal orientation, defect density, layer count) applied to metal surfaces. Biofilm-DIDS harnesses the power of natural language processing, text mining, data integration, domain ontologies, and an artificial intelligence metadata annotation system. These capabilities empower users to explore integrated datasets derived from experiments as well as existing resources (e.g., materials, transcriptomics, proteomics, metabolomics, methylome, phenotypic, analytic tools, publications, and more). This comprehensive approach significantly enhances researchers’ capacity to address complex questions in this challenging domain. Biofilm-DIDS empowers researchers to connect their biofilm/material-related inquiries with pertinent datasets, analytic tools, and publications using free-text searchers, thereby facilitating more streamlined and effective research process.",
        ],
      },
    ],
    metadata: {
      kernelspec: {
        display_name: "Python 3",
        language: "python",
        name: "python3",
      },
      language_info: {
        codemirror_mode: {
          name: "ipython",
          version: 3,
        },
        file_extension: ".py",
        mimetype: "text/x-python",
        name: "python",
        nbconvert_exporter: "python",
        pygments_lexer: "ipython3",
        version: "3.7.3",
      },
    },
    nbformat: 4,
    nbformat_minor: 2,
  };

  // analyzing data

  notebookContent.cells.push({
    cell_type: "markdown",
    metadata: {},
    source: ["### Analyze your Data"],
  });
  notebookContent.cells.push({
    cell_type: "markdown",
    metadata: {},
    source: ["#### Analyze Data with Geo2R"],
  });

  selectedItems.forEach((x) => {
    const accession = x.download.split("acc=")[1];
    notebookContent.cells.push({
      cell_type: "markdown",
      metadata: {},
      source: [`##### Accession: ${accession}`],
    });
    notebookContent.cells.push({
      cell_type: "markdown",
      metadata: {},
      source: [
        `Please click on url: [https://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=${accession}](https://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=${accession})`,
      ],
    });
  });

  // downloading data

  notebookContent.cells.push({
    cell_type: "markdown",
    metadata: {},
    source: ["### Download your Data"],
  });

  selectedItems.forEach((x) => {
    const accession = x.download.split("acc=")[1];
    const series = accession.substr(0, accession.length - 3) + "nnn";

    notebookContent.cells.push({
      cell_type: "markdown",
      metadata: {},
      source: [`##### Accession: ${accession}`],
    });

    notebookContent.cells.push({
      cell_type: "code",
      metadata: {},
      source: [
        "import urllib.request\n",
        "import gzip\n",
        "import shutil\n",
        "import os\n",
        "\n",
        `url = "https://ftp.ncbi.nlm.nih.gov/geo/series/${series}/${accession}/matrix/${accession}_series_matrix.txt.gz"\n`,
        `downloaded_file = "${accession}.gz"\n`,
        `unzipped_file = "${accession}.txt"\n`,
        "\n",
        "# Download the gzipped file\n",
        "urllib.request.urlretrieve(url, downloaded_file)\n",
        "\n",
        "# Unzip the file\n",
        "with gzip.open(downloaded_file, 'rb') as f_in:\n",
        "    with open(unzipped_file, 'wb') as f_out:\n",
        "        shutil.copyfileobj(f_in, f_out)\n",
        "\n",
        'print(f"File downloaded and unzipped to: {unzipped_file}")\n',
        "\n",
      ],
    });
  });

  notebookContent.cells.forEach((cell) => {
    if (cell.cell_type === "code" && !cell.hasOwnProperty("outputs")) {
      cell.outputs = [];
    }
  });

  notebookContent.cells.forEach((cell) => {
    if (cell.cell_type === "code" && !cell.hasOwnProperty("execution_count")) {
      cell.execution_count = null; // Set a default value, you can adjust as needed
    }
  });

  uploadToGitHub(notebookContent);
};

const uploadToGitHub = async (notebookContent) => {
  const currentTime = Date.now();
  try {
    // Your GitHub personal access token
    const token = config.GITHUB_KEY;

    // GitHub repository details
    const owner = "ShivaAryal";
    const repo = "biofilm-dids";
    const branchName = "biofilm-dids-branch-" + currentTime;

    // Fetch the latest commit SHA from the main branch
    const getMainBranchResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/branches/main`
    );
    const mainBranchData = await getMainBranchResponse.json();
    const mainBranchSHA = mainBranchData.commit.sha;

    // Create a new branch
    const createBranchResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/git/refs`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ref: `refs/heads/${branchName}`,
          sha: mainBranchSHA,
        }),
      }
    );

    try {
      const responseBody = await createBranchResponse.json();
      console.log("Response body:", responseBody);
    } catch (error) {
      console.error("Error parsing JSON response:", error);
    }

    if (!createBranchResponse.ok) {
      console.error("Failed to create branch");
      return;
    }

    // Update the content in the new branch
    await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${repo}-${branchName}.ipynb`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Upload biofilm dids analyze notebook",
          content: btoa(JSON.stringify(notebookContent)), // Convert to base64 directly
          branch: branchName,
        }),
      }
    );

    window.open(
      `https://colab.research.google.com/github/${owner}/${repo}/blob/${branchName}/${repo}-${branchName}.ipynb`
    );
  } catch (error) {
    console.error("Error uploading to GitHub:", error);
  }
};

const removeHtmlTags = (text) => {
  return text.replace(/<[^>]*>/g, " ");
};

export { onAnalyzeData, removeHtmlTags };
