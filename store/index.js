// import { Auth, Storage } from 'aws-amplify'
import html2canvas from 'html2canvas'
import { jsPDF as JSPDF } from 'jspdf'
export const state = () => ({
  editor: null
})

export const mutations = {
  setEditor(state, editor = state.editor) {
    state.editor = editor
  }
}

export const actions = {
  downloadPDF() {
    const elem = document.querySelector('.gjs-frame')
    const frame = elem.contentWindow.document.getElementsByTagName('html')[0]
    html2canvas(elem.contentWindow.document.body, {
      width: frame.clientWidth,
      height: frame.clientHeight,
      scale: 2
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const doc = new JSPDF()
      const width = doc.internal.pageSize.width
      doc.addImage(imgData, 'PNG', 10, 10, width * 0.9, 0)
      doc.save()
    })
  }
}
export const getters = {}
