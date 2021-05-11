document.querySelector('button').addEventListener('click', function () {
  let d = document.querySelector('input').value
  d = parseFloat(d)
  const r = d / 2
  let area = (3.14 * (r * r)) * 10
  let circumference = (2 * 3.14 * r) * 10
  area = Math.round(area)
  circumference = Math.round(circumference)
  area = area / 10
  circumference = circumference / 10
  alert('Area:  ' + area)
  alert('Circumference:  ' + circumference)
})
