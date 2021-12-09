//
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
// loadResume_old()
function loadResume_old(){
    let resume = document.getElementById("resume")
    for (let i = resume_data.length - 1; i >= 0; i--) {
        let rDate = resume_data[i]["date"]
        let rTitle = resume_data[i]["title"]
        let rPlace = resume_data[i]["place"]
        let rLink = resume_data[i]["link"]
        let rDesc = resume_data[i]["desc"]
        let rType = resume_data[i]["type"]

        let linkString = `<div class="rPlace">${rPlace}</div>`
        if (rLink) {
            linkString = `<div class="rPlace"><a href="${rLink}" target="_blank">${rPlace}</a></div>`
        }

        let resumeItemString = ""
        switch (rType) {
            case "school":
                resumeItemString = `<div class="resumeItem resumeItem-blue">`
                break
            case "internship":
                resumeItemString = `<div class="resumeItem resumeItem-red">`
                break
            case "job":
                resumeItemString = `<div class="resumeItem resumeItem-green">`
                break
            default:
                resumeItemString = `<div class="resumeItem resumeItem-black">`
                break
        }

        let resumeString = `
        ${resumeItemString}
        <div class="rDate">${rDate}</div>
        <div class="rTitle"><span></span>${rTitle}</div>
        ${linkString}
        <div class="rDesc">${rDesc}</div>
        </div>
        `

        resume.innerHTML += resumeString
    }
}

//
loadResume()
function loadResume(){
    for (let i = resume_data.length - 1; i >= 0; i--) {
        let rDate = resume_data[i]["date"]
        let rTitle = resume_data[i]["title"]
        let rPlace = resume_data[i]["place"]
        let rLink = resume_data[i]["link"]
        let rDesc = resume_data[i]["desc"]
        let rType = resume_data[i]["type"]

        let rAvatarStr = svg_arrow_square_right
        let rIconStr = ``
        let rJobStr = rTitle
        let rDateStr = rDate
        let rContentStr = rDesc

        switch (rType) {
            case "school":
                rIconStr = svg_school
                break
            case "internship":
                rIconStr = svg_building
                break
            case "job":
                rIconStr = svg_building
                break
            default:
                rIconStr = svg_file
                break
        }

        let rPlaceStr = rPlace
        if (rLink){
            rPlaceStr = `<a class="no-decoration" href="${rLink}" target="_blank">${rPlace}</a>`
        }

        let resumeItemString = `
        <div class="resume-avatar">${rAvatarStr}</div>
        <div class="resume-item">
            <div class="resume-header">
                <div class="item-icon">${rIconStr}</div>
                <div class="item-title">
                    <div class="item-job">${rJobStr}</div>
                    <div class="item-place">${rPlaceStr}</div>
                </div>
                <div class="item-date">${rDateStr}</div>
            </div>
            <div class="resume-content">${rContentStr}</div>
        </div>
        `

        document.getElementById("resume-grid").innerHTML += resumeItemString

    }
}
