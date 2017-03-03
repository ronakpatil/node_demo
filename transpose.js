var _ = require('underscore');

       // var k = arr.length;  
        //var l = arr[0].length;  
        var arr1 = [];  
        var arr2 = [];
        var j;
        var obj1={
            name : "vingesh",
            dept : "node",
            no : 789456
        };
        var obj2 = {
                name : "ronak",
                dept : "nlp",
            no : 123664
        }
       arr1.push(obj1);
       arr1.push(obj2);
      
       var arr3 = [{"ENAME":"CLARK","DNAME":"ACCOUNTING","DEPTNO":10},{"ENAME":"MILLER","DNAME":"ACCOUNTING","DEPTNO":10},{"ENAME":"KING","DNAME":"ACCOUNTING","DEPTNO":10},{"ENAME":"FORD","DNAME":"RESEARCH","DEPTNO":20},{"ENAME":"SCOTT","DNAME":"RESEARCH","DEPTNO":20},{"ENAME":"JONES","DNAME":"RESEARCH","DEPTNO":20},{"ENAME":"SMITH","DNAME":"RESEARCH","DEPTNO":20},{"ENAME":"ADAMS","DNAME":"RESEARCH","DEPTNO":20},{"ENAME":"WARD","DNAME":"SALES","DEPTNO":30},{"ENAME":"MARTIN","DNAME":"SALES","DEPTNO":30},{"ENAME":"TURNER","DNAME":"SALES","DEPTNO":30},{"ENAME":"JAMES","DNAME":"SALES","DEPTNO":30},{"ENAME":"ALLEN","DNAME":"SALES","DEPTNO":30},{"ENAME":"BLAKE","DNAME":"SALES","DEPTNO":30}];

    for(var i in arr3[0]){
      arr2.push(_.pluck(arr3, i)); 
    }
console.log(arr2);