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
  function concat(array, ...args) {
    let res = [...array];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            res.push(...args[i]);
        } else {
            res.push(args[i]);
        }
    }
    return res
  }
  function differernce(arr,val){
    var res=[]
    var r=concat([],...val)
    for(var i=0;i<arr.length;i++){
      if(r.indexOf(arr[i])==-1){
        res.push(arr[i])
      }
    }
    return res
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
    var res=[]
    for(var i=n;i<array.length;i++){
      res.push(array[i])
    }
    return res
  }
  function dropRight(array,n){
    if(n>=array.length){
      return []
    }
    return array.slice(0,array.length-n)
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
  function flatten(array){
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            res.push(...array[i]);
        } else {
            res.push(array[i]);
        }
    }
    return res
  }
  function flattenDeep(array){
    var res=[]
    for(var i=0;i<array.length;i++){
      if(Array.isArray(array[i])){
        res = res.concat(flattenDeep(array[i]))
      }else{
        res.push(array[i])
      }
    }
    return res
  }
  function flattenDepth(array,depth){
    var res=array
    while(depth){
      res=flatten(array)
      depth--
    }
    return res
    /*var res=[]
    for(var i=0;i<array.length;i++){
      if(Array.isArray(item&&depth>=a)){
        res.push(...flattenDepth(array[i]))
        }res.push(array[i])
      }
      return res*/
    } 
  function fromPairs(pairs){
    var res={}
    for(var i=0;i<pairs.length;i++){
      res[pairs[i][0]]=pairs[i][1]
    }
    return res
  }
  function head(array){
    if(!array){
      return []
    }
    return array[0]
  }
  function indexOf(array,value,fromIndex=0){
    for(var i=fromIndex;i<array.length;i++){
      if(array[i]==value){
        return i
      }
    }
    return -1
  }
  function initial(arr){
    return arr.slice(0,arr.length-1)
  }
  function nth(arr,val){
    if(val<0){
      var res=[]
      var a=MAth.abs(val)
      for(var i=arr.length-1;i>=0;i--){
        res.push(arr[i])
      }
      return res[a-1]
    }else{
      return arr[val]
    }
  }
  function pull(arr,...val){
    var res=[]
    for(let key of arr){
      if(!val.includes(key)){
        res.push(key)
      }
    }
    return res
  }
  function pullAll(arr,val){
    var res=[]
    for(let key of arr){
      if(!val.includes(key)){
        res.push(key)
      }
    }
    return res
  }
  
  return {
    chunk,
    compact,
    concat,
    differernce,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    dropRightWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    nth,
    pull,
    pullAll,
  };
})();
