window.onload = function () {
	var tree = {
		data:'A',
		id:'1',
		child:[
			{data:'B',id:'11',child:[
				{data:'E',id:'111',child:[{data:'J',id:'1111'}]},{data:'F',id:'112'}
			]},
			{data:'C',id:'12',child:[
				{data:'G',id:'121'},{data:'H',id:'122'}
			]},
			{data:'D',id:'13',child:[{data:'I',id:'131'}]}
		]
	},arr = [],btn1 = $('#btn1'),btn2 = $('#btn2'),val,timeID,flag=false,last;
	function $ (ele) {
		return document.querySelector(ele);
	}
	//多叉树前序遍历
	function preOrderTraverse (node) {
		if(!node)
			return;
		arr.push(node.data);
		if(node.child && node.child.length>0){
			for(var i=0;i<node.child.length;i++){
				preOrderTraverse(node.child[i]);
			}
		}
	}
	//创建多叉树
	function createDivNode (node) {
		var newNode = document.createElement('div'),nodeText = document.createTextNode(node.data),nodeID = node.id;
		newNode.appendChild(nodeText);
		newNode.setAttribute('index', node.id);
		newNode.setAttribute('data', node.data);
		//console.log(typeof nodeID)
		if(nodeID.length == 1){
			document.body.appendChild(newNode);
		}
		if(nodeID.length == 2){
			$('[index="1"]').appendChild(newNode);

		}
		if(nodeID.length == 3){
			if(nodeID.charAt(1) == 1 && $('[index="11"]'))
				$('[index="11"]').appendChild(newNode);
			if(nodeID.charAt(1) == 2 && $('[index="12"]'))
				$('[index="12"]').appendChild(newNode);
			if(nodeID.charAt(1) == 3 && $('[index="13"]'))
				$('[index="13"]').appendChild(newNode);
		}
		if(nodeID.length == 4){
			if(nodeID.charAt(2) == 1 && $('[index="111"]'))
				$('[index="111"]').appendChild(newNode);
			if(nodeID.charAt(2) == 2 && $('[index="112"]'))
				$('[index="112"]').appendChild(newNode);
			if(nodeID.charAt(2) == 3 && $('[index="113"]'))
				$('[index="113"]').appendChild(newNode);

		}

		if(node.child && node.child.length>0){
			for(var i=0;i<node.child.length;i++){
				createDivNode(node.child[i]);
			}
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
	//重置
	function reset () {
		arr = new Array();
		if(last)
			last.style.background = 'white';
	}
	//在div上显示遍历动画
	function show () {
		var i = 0;
		clearInterval(timeID);
		var newArr=toDiv(arr);
		console.log(newArr)
		timeID = setInterval(function () {
			if(i == newArr.length-1)
				flag = false;
			if(last)
				last.style.background = 'white';
			newArr[i].style.background = 'red';
			last = newArr[i];
			if(arr[i] == val){
				flag = false;
				newArr[i].style.background = 'skyblue';
				clearInterval(timeID);
			}
			i++;
			if(i == newArr.length){
				clearInterval(timeID);
			}
		},1000);

	}
	createDivNode(tree);
	btn1.onclick = function () {
		if(!flag){
			reset();
			preOrderTraverse(tree);
			console.log(arr);
			show();
		}
	};
	btn2.onclick = function () {
		val = $('#val').value.toUpperCase(); // 将输入结果转为大写
		console.log(val);
		if(!val)
			return alert('请输入查询节点');
		if(!flag){
			reset();
			preOrderTraverse(tree);
			console.log(arr);
			show();
		}
	};
};