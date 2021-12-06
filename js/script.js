loadCarousel()

function loadCarousel(){
    // carousel resume
    resumeItem = resume_data[0]
    document.getElementById("carousel-resume-title").innerHTML = resumeItem["date"]
    document.getElementById("carousel-resume-place").innerHTML = resumeItem["place"]
    document.getElementById("carousel-resume-content").innerHTML = resumeItem["desc"]
    document.querySelectorAll('#carousel-resume-slides span')[0].innerHTML = "1"
    document.querySelectorAll('#carousel-resume-slides span')[1].innerHTML = resume_data.length.toString()
    document.getElementById("carousel-resume").setAttribute("value", "0")
}

function previousItemResume(){
    let currentId = parseInt(document.getElementById("carousel-resume").getAttribute("value"))
    let previousId = currentId - 1
    if (previousId < 0) return
    let previousItem = resume_data[previousId]
    document.getElementById("carousel-resume-title").innerHTML = previousItem["date"]
    document.getElementById("carousel-resume-place").innerHTML = previousItem["place"]
    document.getElementById("carousel-resume-content").innerHTML = previousItem["desc"]
    document.querySelectorAll('#carousel-resume-slides span')[0].innerHTML = (previousId + 1).toString()
    document.getElementById("carousel-resume").setAttribute("value", previousId.toString())
}

function nextItemResume(){
    let currentId = parseInt(document.getElementById("carousel-resume").getAttribute("value"))
    let nextId = currentId + 1
    if (nextId > resume_data.length - 1) return
    let nextItem = resume_data[nextId]
    document.getElementById("carousel-resume-title").innerHTML = nextItem["date"]
    document.getElementById("carousel-resume-place").innerHTML = nextItem["place"]
    document.getElementById("carousel-resume-content").innerHTML = nextItem["desc"]
    document.querySelectorAll('#carousel-resume-slides span')[0].innerHTML = (nextId + 1).toString()
    document.getElementById("carousel-resume").setAttribute("value", nextId.toString())
}
