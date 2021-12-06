// loadCarousel()

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

//
loadResume()
function loadResume(){
    console.log("debut fonction")
    let resume = document.getElementById("resume")
    for (let i = resume_data.length - 1; i >= 0; i--) {
        let rDate = resume_data[i]["date"]
        let rTitle = resume_data[i]["title"]
        let rPlace = resume_data[i]["place"]
        let rLink = resume_data[i]["link"]
        let rDesc =resume_data[i]["desc"]

        let linkString = `<div class="rPlace">${rPlace}</div>`
        if (rLink) {
            linkString = `<div class="rPlace"><a href="${rLink}" target="_blank">${rPlace}</a></div>`
        }

        let resumeString = `
        <div class="resumeItem">
        <div class="rDate">${rDate}</div>
        <div class="rTitle"><span></span>${rTitle}</div>
        ${linkString}
        <div class="rDesc">${rDesc}</div>
        </div>
        `

        console.log(resumeString)
        resume.innerHTML += resumeString
    }
    console.log("fin fonction")
}
