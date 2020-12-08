var abu986 = (function () {
  function chunk(array,size){
    var res=[]
    if(!array||size<1){
      return []
    }
    for(var i=0;i<array.length;i+=size){
      res.push(array.slice(i,i+size))
    }
    return res
  }
  function compact(array){
    var res=[]
    for(var i=0;i<array.length;i++){
      if(array[i]){
        res.push(array[i])
      }
    }
    return res
  }
  function concat(ary, ...args) {
    var res = [...ary];
    for (var i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            res.push(...args[i]);
        } else {
            res.push(args[i]);
        }
    }
  }
  function join(array,separator){
    var res=''
    for(var i=0;i<array.length-1;i++){
      res+=array[i]+''+separator
    }
    res=res+array[array.length-1]
    return res
  }
  function last(array){
    return res=array[array.length-1]
  }
  function lastIndexOf(array, value,fromIndex=array.length-1){
    for(var i=fromIndex;i>=0;i--){
      if(array[i]==value){
        return i
      }
    }
    return -1
  }
  function drop(array,n){
    if(!n){
      n=1
    }
    if(n>=array.length){
      return []
    }var res=[]
    for(var i=n;i<array.length;i++){
      res.push(array[i])
    }
    return res
  }
  function dropRightWhile(array,predicate){
   
  }
  function fill(array,value,start,end){
    var a=end-start
    if(a>0){
      for(var i=start;i<end;i++){
        array[i]=value
      }
    }
    return array
  }
  function findIndex(array,predicate,fromIndex){

  }
  function findLastIndex(array,predicate,fromIndex){

  }
  return {
    chunk,
    compact,
    concat,
    join,
    last,
    lastIndexOf,
    drop,
    dropRightWhile,
    fill,
    findIndex,
    findLastIndex,
  };
})();
