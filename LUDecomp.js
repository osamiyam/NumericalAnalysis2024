
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

// var a = [
//     2, 3, 4, 5, 1,
//     3, 4, 2, 1, 1,
//     6, 5, 3, 12, 1,
//     1, 1, 2, 2, 9,
//     1, 4, 6, 2, 3
// ]
// var n = 5

// var a = [
//   2, 3, 4, 5,
//   3, 4, 2, 1,
//   6, 5, 3, 12,
//   1, 1, 2, 2
// ]
// var n = 4

// var a = [
//   1, 3, 5, 9,
//   1, 4, 2, 3, 
//   2, 5, 6, 8,
//   3, 1, 2, 1
// ]
var n = 4

var a = [
  1, 2, 5, 6,
  2, 3, 1, 2,
  3, 4, 3, 3,
  5, 1, 1, 1,
]
// var n = 4


// var a = [
//   2, 1, 1,
//   4, 3, 4,
//   6, 5, 10
// ]
// var n = 3

print_matrix(a)

function min(x, y) {if (x < y) return x; else return y}

function LUDecomp(a) {
  var m = []
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var sum = a[idx(i, j)]
      for (var k = 0; k < min(i, j); k++)
        sum -= m[idx(i, k)] * m[idx(k, j)]
      if (i > j) m[idx(i, j)] = sum / m[idx(j, j)]
      else m[idx(i, j)] = sum
    }
  }
  return m
}

function LUDecomp2(a) {
  var m = []
  for (var i = 0; i < n * n; i++) m[i] = a[i]
  for (var k = 0; k < n; k++) {
    var diag = m[idx(k, k)]
    for (i = k + 1; i < n; i++) m[idx(i, k)] /= diag
    for (var i = k + 1; i < n; i++) {
      for (var j = k + 1; j < n; j++)
        m[idx(i, j)] -= m[idx(i, k)] * m[idx(k, j)]
    }
  }
  return m
}
puts("----")
var m = LUDecomp(a)
print_matrix(m)
puts("----")
var m2 = LUDecomp2(a)
print_matrix(m2)


function solve(a, b) {
  var m = LUDecomp(a)
  // var m = LUDecomp2(a)
  var x = b.slice(0)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++)
      x[i] -= m[idx(i, j)] * x[j]
  }
  for (var j = n - 1; j >= 0; j--) {
    for (var k = j + 1; k < n; k++) 
      x[j] -= m[idx(j, k)] * x[k]
    x[j] = x[j] / m[idx(j, j)]
  }
  return x
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
// var b = [3, 2, 1, 2, 1]
puts(JSON.stringify(b))

var ans = solve(a, b)
puts("ans:")
puts(JSON.stringify(ans))
puts("check:")
puts(JSON.stringify(matrix_mult(a, ans)))


// var aa = [
//   1, 2, 5, 6,
//   2, 3, 1, 2,
//   3, 4, 3, 3,
//   5, 1, 1, 1
// ]

var aa = [
  1, 3, 5, 9,
  1, 4, 2, 3,
  2, 5, 6, 8,
  3, 1, 2, 1,
]

print_matrix(LUDecomp(aa))
puts(solve(aa, [1, 2, 3, 4]))
