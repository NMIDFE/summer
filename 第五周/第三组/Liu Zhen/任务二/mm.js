function getElements() {

            var leftIn = document.getElementById("lfi");

            var rightIn = document.getElementById("rgi");

            var leftOut = document.getElementById("lfo");

            var rightOut = document.getElementById("rgo");

            leftIn.addEventListener("click",linsener,false);

            rightIn.addEventListener("click",linsener,false);

            leftOut.addEventListener("click",linsener,false);

            rightOut.addEventListener("click",linsener,false);

        }

        function linsener(event) {

                var input = document.getElementById("inPut").value;

                var reg = /^\d+$/g;

                var result = document.getElementById("result");

                var reslist =result.childNodes;

                var eve = event.target.value;

                switch (eve) {

                    case 'leftIn' :

                        if (reg.test(input)) {

                            var newEle = document.createElement("span");

                            var text = document.createTextNode(input);

                            newEle.appendChild(text);

                        } else {

                            alert("请输入正确的数字");

                        }

                        if (reslist.length === 0) {

                            result.appendChild(newEle);

                        } else {

                            result.insertBefore(newEle, result.firstChild);

                        }

                        break;

                    case 'rightIn' :

                        if (reg.test(input)) {

                            var newEle = document.createElement("span");

                            var text = document.createTextNode(input);

                            newEle.appendChild(text);

                        } else {

                            alert("请输入正确的数字");

                        }

                        result.appendChild(newEle);

                        break;

                    case 'leftOut' :

                        if(reslist.length===0) {

                            alert("没有子元素了");

                        } else {

                            result.removeChild(result.firstChild);

                        }

                        break;

                    case 'rightOut' :

                        if(reslist.length===0) {

                            alert("没有子元素了");

                        } else {

                            result.removeChild(result.lastChild);

                        }

                        break;

                    }



        }

        window.onload = getElements;