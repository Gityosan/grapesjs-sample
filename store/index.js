import html2canvas from 'html2canvas'
import { jsPDF as JSPDF } from 'jspdf'
export const state = () => ({
  frameDirection: true
})

export const mutations = {
  setFrameDirection(state, frameDirection = state.frameDirection) {
    state.frameDirection = frameDirection
  }
}

export const actions = {
  downloadPDF({ state }, name = '') {
    const elem = document.querySelector('.gjs-frame')
    const frame = elem.contentWindow.document.getElementsByTagName('html')[0]
    html2canvas(elem.contentWindow.document.body, {
      width: frame.clientWidth,
      height: frame.clientHeight,
      scale: 2
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const doc = new JSPDF({
        orientation: state.frameDirection ? 'p' : 'l',
        format: 'a4'
      })
      const width = doc.internal.pageSize.width
      doc.addImage(imgData, 'PNG', 10, 10, width * 0.9, 0)
      if (name) {
        doc.save(name + '.pdf')
      } else {
        doc.save()
      }
    })
  }
}
export const getters = {
  frameDirection: (state) => state.frameDirection
}
