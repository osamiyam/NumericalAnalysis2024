
var puts = console.log

function idx(i, j) {return i * n + j}

function print_matrix(a) {
  for (var i = 0; i < n; i++) {
    var s = ""
    for (var j = 0; j < n; j++) {
      var val = a[idx(i, j)]
      if (val < 10) s += " "
      s += "  " + val
    }
    puts(s)
  }
}

var a = [
  2, 3, 4, 5,
  3, 4, 2, 1,
  6, 5, 3, 12,
  1, 1, 2, 2
]

var n = 4 
print_matrix(a)

function eliminate(a, b) {
  var aa = a.slice(0)
  var bb = b.slice(0)
  for (var el = 0; el < n - 1; el++) {
    for (var j = el + 1; j < n; j++) {
      var m = aa[idx(j, el)] / aa[idx(el, el)]
      for (var k = el + 1; k < n; k++)
	aa[idx(j, k)] = aa[idx(j, k)] - m  * aa[idx(el, k)]
      bb[j] = bb[j] - m * bb[el]
    }
  }
  var xx = []
  for (var j = n - 1; j >= 0; j--) {
    xx[j] = bb[j]
    for (var k = j + 1; k < n; k++) 
      xx[j] = xx[j] - aa[idx(j, k)] * xx[k]
    xx[j] = xx[j] / aa[idx(j, j)]
  }
  return xx
}

function matrix_mult(a, b) {
  var x = []
  for (var i = 0; i < n; i++) {
    var s = 0.0
    for (var j = 0; j < n; j++)
      s += a[idx(i, j)] * b[j]
    x[i] = s
  }
  return x
}

var b = [3, 2, 1, 2]
puts(JSON.stringify(b))

var ans = eliminate(a, b)
puts("ans:")
puts(JSON.stringify(ans))
puts("check:")
puts(JSON.stringify(matrix_mult(a, ans)))


