var Abu986=function(){
  function reduce(ary, reducer, result) {
    var start = 0
    if (result == undefined) {
      result = ary[0]
      start = 1
    }
    for (var i = start; i < ary.length; i++) {
      result = reducer(result, ary[i], i, ary)
    }
    return result
  }
}
