
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
  12, 3, 5, 4,
  3, 14, 1, 2,
  6, 5, 12, 3,
  1, 1, 2, 10
]

var n = 4 
print_matrix(a)
var b = [3, 2, 2, 1]
puts(JSON.stringify(b))

function GS(a, b, x0) {
  var x = x0.slice(0)
  var xn = x0.slice(0)
  var eps = 1.0e-6
  var count = 0

  while (true) {
    puts((count++) + " : " +  x)
    for (var i = 0; i < n; i++) {
      var sum = b[i]
      for (var j = 0; j < n; j++)
        if (i != j) sum -= a[idx(i, j)] * xn[j]
      xn[i] = sum / a[idx(i, i)]
    }
    var dmax = 0.0
    for (var i = 0; i < n; i++) {
      var d = Math.abs(x[i] - xn[i])
      if (d > dmax) dmax = d
    }
    if (dmax < eps) break
    for (var i = 0; i < n; i++)
      x[i] = xn[i]
  }
  return xn
}

puts(GS(a, b, [0, 0, 0, 0]))
