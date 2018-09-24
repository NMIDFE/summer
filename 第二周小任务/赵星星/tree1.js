(function(){
        var oRoot=document.getElementById("root");
        function Node(value,left,right,parent){//设置节点
            this.value=value;
            this.left=left;
            this.right=right;
            this.parent=parent;
        }
        var arrayPre=new Array();
        var run=function(obj,p){//遍历dom节点
            var node=new Node();
            node.value=obj;
            console.log(node.value)
            node.parent=p;
            if(obj.children.length>0){
                if(!!obj.children[0]){
                    node.left=obj.children[0];
                    arguments.callee(obj.children[0],obj);
                }
                if(!!obj.children[1]){
                    node.right=obj.children[1];
                    arguments.callee(obj.children[1],obj);
                }
            }
            arrayPre.push(node);
        };
        var nodeArray=arrayPre;
        var changNode=function(argument) {//确定节点间的关系
            for(var i=0,len=argument.length;i<len;i++){
                for(var j=0;j<len;j++){
                    if(argument[i].left==argument[j].value){
                        argument[i].left=argument[j];
                    }
                    if(argument[i].right==argument[j].value){
                        argument[i].right=argument[j];
                    }
                }
            }
        };
        var showRed=function(obj){
            obj.style.background="red";
        }
        var showWhite=function(obj){
            var divs=document.getElementsByTagName("div");
            for(var i=0,len=divs.length;i<len;i++){
                divs[i].style.background="#fff";
            }
        }
        var pIndex=-5;
        var printPre=function(obj){//打印节点
            var ar=arguments;
            pIndex++;
            (function(o,pi){
                setTimeout(function(){
                    showWhite();
                    showRed(o.value);
                },500*pi);
            })(obj,pIndex);
            pIndex++;
            if(!!obj.left){
                ar.callee(obj.left);
            }

            pIndex++;
            if(!!obj.right){
                ar.callee(obj.right);
            }

        };
        var printMiddle=function(obj){
            var ar=arguments;

            pIndex++;
            if(!!obj.left){
                ar.callee(obj.left);
            }
            pIndex++;
            (function(o,pi){
                setTimeout(function(){
                    showWhite();
                    showRed(o.value);
                },500*pi);
            })(obj,pIndex);
            pIndex++;
            if(!!obj.right){
                ar.callee(obj.right);
            }

        };
        var printLast=function(obj){
            var ar=arguments;

            pIndex++;
            if(!!obj.left){
                ar.callee(obj.left);
            }

            pIndex++;
            if(!!obj.right){
                ar.callee(obj.right);
            }
            pIndex++;
            (function(o,pi){
                setTimeout(function(){
                    showWhite();
                    showRed(o.value);
                },500*pi);
            })(obj,pIndex);

        };
        var oPre=document.getElementById("pre");
        var oMiddle=document.getElementById("middle");
        var oLast=document.getElementById("last");

        oPre.onclick=function(){
            pIndex=0;
            run(oRoot,oRoot);
            changNode(arrayPre);
            printPre(arrayPre[arrayPre.length-1]);

        };
        oMiddle.onclick=function(){
            pIndex=-5;
            run(oRoot,oRoot);
            changNode(arrayPre);
            printMiddle(arrayPre[arrayPre.length-1]);

        };
        oLast.onclick=function(){
            pIndex=-5;
            run(oRoot,oRoot);
            changNode(arrayPre);
            printLast(arrayPre[arrayPre.length-1]);

        };

      })();
