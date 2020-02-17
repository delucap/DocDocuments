# DocDocuments
DocDocuments is a simple native app meant to make it easier for the academic students and researchers to search in simple way scientific documents.
It has been built in the context of Web Data Integration course at University of Salerno.

# Features
The application exploits a few infos about each searched paper to the user:
- Description of included Book series (about Price, Editors, Description)
- References of related searched article
- Links to ORCID profiles 
- Links to related publisher page by using DOIs
- Author's affiliation 
- Author's papers

# Sources
For this application, following source has been chosen:
- [CrossRef](http://crossref.org) (Author and selected paper informations)
- [GoogleBooks](https://books.google.it) (Editorials information of selected paper)
- [Scopus](http://scopus.com) (Author's affilation and total papers)

N.B. Each data source, such as Scopus, allows us to use downloaded data from its database after a deal with it, which is able to us to use its data.

# Implementation
This app is built by exploiting NativeScript framework for designing application cross-platforms. More precisely the backside part exploits a very simple Angular consumer for the RESTful API used for achieving data.

# Credits
DocDocuments has been developed by [Pasquale De Luca](https://github.com/pascal888)(https://github.com/pascal888)(https://scholar.google.it/citations?user=8jw-QKwAAAAJ&hl=it&authuser=3)
