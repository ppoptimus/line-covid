
export default function PersonDetail() {
  if (typeof window === 'object') {
    const peosinData = window.sessionStorage.getItem("personDetail");
    if (peosinData) {
      return JSON.parse(peosinData)
    } else {
      return null
    }
  }
}