window.onload = function () {
	// 二叉树数据
	var tree = {
		data:'A',
		grade:1, 
		left:{
			data:'B',
			grade:2,
			left:{
				data:'D',
				grade:3,
				left:{
					data:'G',
					grade:4
				},
				right:{
					data:'H',
					grade:4
				}
			},
			right:{
				data:'E',
				grade:3
			}
		},
		right:{
			data:'C',
			grade:5,
			left:{
				data:'F',
				grade:6,
				left:{
					data:'I',
					grade:7
				}
			}
		}
	};
	var last,arr = [],preOrder = $('.pre'),inOrder = $('.in'),postOrder = $('.post'),query = $('.query'),flag = false,timeID,val;
	//创建二叉树
	function createBinaryTree (tree) {
		var newNode = document.createElement('div');
		var nodeText = document.createTextNode(tree.data);
		newNode.appendChild(nodeText);
		newNode.setAttribute('index', tree.grade);
		var index = parseInt(newNode.getAttribute('index'));
		newNode.setAttribute('data', tree.data);
		if(index == 1){
			document.body.appendChild(newNode);
		}
		if(index<5&&index>1){
			index--;	
			var parent = document.querySelector("[index='"+index+"']");
			parent.appendChild(newNode);
			
		}
		if(index==5){
			index = index - 4;
			var parent = document.querySelector("[index='"+index+"']");
			parent.appendChild(newNode);
			
		}
		if(index>5){
			index = index - 1;
			var parent = document.querySelector("[index='"+index+"']");
			parent.appendChild(newNode);
			
		}
		if(tree.left)
			createBinaryTree(tree.left);
		if(tree.right)
			createBinaryTree(tree.right);

	}
	createBinaryTree(tree); // 创建二叉树
	function $ (ele) {
		return document.querySelector(ele);
	}
	//先序遍历
	function preOrderTraverse (node) {
		if(!(node == null)){
			arr.push(node.data);
			if(node.left)
				preOrderTraverse(node.left);
			if(node.right)
				preOrderTraverse(node.right);
		}
	}
	//将二叉树遍历结果转为div存放在数组中
	function toDiv (arr) {
		var newArr = arr.concat();
		for(var i=0;i<arr.length;i++){
			newArr[i] = $('[data="'+arr[i]+'"]');
		} 
		return newArr;
	}
	//中序遍历
	function inOrderTraverse (node) {
		if(!(node == null)){
			if(node.left)
				inOrderTraverse(node.left);
			arr.push(node.data);
			if(node.right)
				inOrderTraverse(node.right);
		}
	}
	//后序遍历
	function postOrderTraverse (node) {
		if(!(node == null)){
			if(node.left)
				postOrderTraverse(node.left);
			if(node.right)
				postOrderTraverse(node.right);
			arr.push(node.data);
		}
	}
	//在div上显示遍历动画
	function show () {
		var i = 0;
		clearInterval(timeID);
		var newArr=toDiv(arr);
		timeID = setInterval(function () {
			if(i == newArr.length-1)
				flag = false;
			if(last)
				last.style.background = 'white';
			newArr[i].style.background = 'red';
			last = newArr[i];
			if(arr[i] == val){
				flag = false;
				valIsFound = true;
				newArr[i].style.background = 'skyblue';
				clearInterval(timeID);
			}
			i++;
			if(i == newArr.length){
				clearInterval(timeID);
			}
		},1000);

	}
	//重置
	function reset () {
		arr = new Array();
		if(last)
			last.style.background = 'white';
	}
	preOrder.onclick = function () {
		if(!flag){
			flag = true;
			reset();
			preOrderTraverse(tree);
			console.log(arr);
			show();
		}
	};
	inOrder.onclick = function () {
		if(!flag){
			flag = true;
			reset();
			inOrderTraverse(tree);
			console.log(arr);
			show();
		}	
	};
	postOrder.onclick = function () {
		if(!flag){
			flag = true;
			reset();
			postOrderTraverse(tree);
			console.log(arr);
			show();
		}	
	};
	query.onclick = function () {
		val = $('.val').value.toUpperCase();
		if(!val)
			return alert('请输入查询节点');
		console.log(val);
		if(!flag){
			flag = true;
			reset();
			preOrderTraverse(tree);
			console.log(arr);
			show();
		}
	};
};