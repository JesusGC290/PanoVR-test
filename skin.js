// Garden Gnome Software - Skin
// Pano2VR 6.0.4/17319
// Filename: PLAYA_02.ggsk
// Generated 2020-07-31T13:47:12

function pano2vrSkin(player,base) {
	player.addVariable('HT_ANI', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid rgba(255,200,0,0.196078);';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=974;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -816px;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 211px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 213px;';
		hs+='height: 42px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,0.784314);';
		hs+='font-size: 25px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="PLAYA DEL CARMEN";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('HT_ANI') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_2.style[domTransition]='opacity 10000ms ease 0ms, visibility 10000ms ease 0ms';
				if (me._text_2.ggCurrentLogicStateAlpha == 0) {
					me._text_2.style.visibility=me._text_2.ggVisible?'inherit':'hidden';
					me._text_2.style.opacity=1;
				}
				else {
					me._text_2.style.visibility="hidden";
					me._text_2.style.opacity=0;
				}
			}
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._text_2);
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 22px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xDQoJCUMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTQ5LDM5OC4xbC0zMC4xLDMwLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTcuNy0xNy43DQoJCWwtMTcuNy0xNy43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zYzAuNi0wLjYsMS42LTAuNiwyLjIsMGwzMC4xLDMwYzAuMywwLjMs'+
			'MC40LDAuNywwLjQsMS4xDQoJCUMtMTQ4LjUsMzk3LjQtMTQ4LjYsMzk3LjgtMTQ5LDM5OC4xeiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkyLjUsMzc5LjNsMTcuNywxNy43bC0xNy43LDE3LjdjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjNjMC42LDAuNiwxLjYsMC42LDIuMiwwbDMwLjEtMzAuMQ0KCQljMC4zLTAuMywwLjUtMC43LDAuNC0xLjFjMC0wLjQtMC4xLTAuOC0wLjQtMS4xbC0zMC4xLTMwYy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM0MtMTkzLjEsMzc3LjctMTkzLjEsMzc4LjctMTkyLjUsMzc5Lj'+
			'MNCgkJeiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_right;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDYuMSwzOTguMmwtMzMuNSwzMy40Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTEyLjUtMTIuNWMtMC43LTAuNy0wLjctMS43LDAtMi40DQoJCWwxOS43LTE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMzMuNSwz'+
			'My40YzAuMywwLjMsMC41LDAuOCwwLjUsMS4yDQoJCUMtMTQ1LjYsMzk3LjQtMTQ1LjcsMzk3LjktMTQ2LjEsMzk4LjJ6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuNCwzNzcuM2wxOS43LDE5LjdsLTE5LjcsMTkuN2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEyLjUsMTIuNWMwLjcsMC43LDEuNywwLjcsMi40LDBsMzMuNS0zMy40DQoJCWMwLjMtMC4zLDAuNS0wLjgsMC41LTEuM2MwLTAuNC0wLjItMC45LTAuNS0xLjJsLTMzLjUtMzMuNGMtMC43LTAuNy0xLjctMC43LTIuNCwwbC0xMi41LDEyLjUNCgkJQy0xOTUuMSwzNzUuNi0xOT'+
			'UuMSwzNzYuNi0xOTQuNCwzNzcuM3oiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_right;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yczI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCQlDLTExOC44LDM2Ni0xNDQsMzQwLjgtMTc1LDM0MC44eiBNLTE1Ny41LDQxNi45bC0xMS4zLDExLjNjLTAuNiwwLjYtMS41LDAuNi0yLjIsMGwtMzAuMi0zMC4xYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuMQ0KCQljMC0wLjUsMC4xLTAuOCwwLjQtMS4ybDMwLjItMzAuMWMwLjYtMC42LDEuNS0wLjYsMi4yLDBsMTEuMywxMS4zYzAuNiwwLjYsMC42LDEuNSwwLDIuMmwtMTcuNywx'+
			'Ny43bDE3LjcsMTcuNw0KCQlDLTE1Ni45LDQxNS40LTE1Ni45LDQxNi4zLTE1Ny41LDQxNi45eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjUsNDE0LjdsLTE3LjctMTcuN2wxNy43LTE3LjdjMC42LTAuNiwwLjYtMS41LDAtMi4ybC0xMS4zLTExLjNjLTAuNi0wLjYtMS41LTAuNi0yLjIsMGwtMzAuMiwzMC4xDQoJCWMtMC4zLDAuMy0wLjQsMC43LTAuNCwxLjJjMCwwLjQsMC4yLDAuOCwwLjQsMS4xbDMwLjIsMzAuMWMwLjYsMC42LDEuNSwwLjYsMi4yLDBsMTEuMy0xMS4zQy0xNTYuOSw0MTYuMy0xNTYuOSw0MTUuNC0xNTcuNSw0MT'+
			'QuNw0KCQl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_left;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40DQoJCUMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE1NS42LDQxOS4xbC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMzMuNS0zMy40Yy0wLjMtMC4zLTAuNS0wLjgtMC41LTEuMg0KCQljMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDMzLjUtMzMuNGMwLjctMC43LDEuNy0wLjcsMi40LDBsMTIuNSwxMi41YzAuNywwLjcsMC43LDEuNywwLDIuNGwt'+
			'MTkuNywxOS43bDE5LjcsMTkuNw0KCQlDLTE1NC45LDQxNy40LTE1NC45LDQxOC40LTE1NS42LDQxOS4xeiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjYsNDE2LjdsLTE5LjctMTkuN2wxOS43LTE5LjdjMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMzMuNSwzMy40DQoJCWMtMC4zLDAuMy0wLjUsMC44LTAuNSwxLjNjMCwwLjQsMC4yLDAuOSwwLjUsMS4ybDMzLjUsMzMuNGMwLjcsMC43LDEuNywwLjcsMi40LDBsMTIuNS0xMi41Qy0xNTQuOSw0MTguNC0xNTQuOSw0MTcuNC0xNT'+
			'UuNiw0MTYuNw0KCQl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_left;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0xNDMuOCwzOTIuOWwtMzAsMzAuMWMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMzAuMS0zMC4xYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zDQoJCWMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTcuNywxNy43bDE3LjctMTcuN2MwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTEu'+
			'MywxMS4zQy0xNDMuMiwzOTEuNC0xNDMuMiwzOTIuMy0xNDMuOCwzOTIuOXoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny4zLDM3OS41bC0xNy43LDE3LjdsLTE3LjctMTcuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xMS4zLDExLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwzMC4xLDMwLjENCgkJYzAuMywwLjMsMC43LDAuNSwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGwzMC0zMC4xYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMTEuMy0xMS4zQy0xNTUuNywzNzguOS0xNTYuNywzNzguOS0xNTcuMywzNzkuNXoiDQoJCS8+DQ'+
			'o8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_down;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDAuNCwzOTIuNWwtMzMuNCwzMy41Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMy40LTMzLjUNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOS43LDE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMS43LTAuNywy'+
			'LjQsMGwxMi41LDEyLjUNCgkJQy0xMzkuNywzOTAuNy0xMzkuNywzOTEuOC0xNDAuNCwzOTIuNXoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS4zLDM3Ny42bC0xOS43LDE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0xLjctMC43LTIuNCwwbC0xMi41LDEyLjVjLTAuNywwLjctMC43LDEuNywwLDIuNGwzMy40LDMzLjUNCgkJYzAuMywwLjMsMC44LDAuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWwzMy40LTMzLjVjMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE1My42LDM3Ni45LTE1NC42LDM3Ni45LTE1NS4zLD'+
			'M3Ny42DQoJCXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_down;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0xNDMuOCw0MDMuMmwtMTEuMywxMS4zYy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTE3LjctMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTExLjMtMTEuMw0KCQljLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwzMC0zMC4xYzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwz'+
			'MC4xLDMwLjFDLTE0My4yLDQwMS43LTE0My4yLDQwMi42LTE0My44LDQwMy4yeiINCgkJLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi43LDQxNC41bDE3LjctMTcuN2wxNy43LDE3LjdjMC42LDAuNiwxLjYsMC42LDIuMiwwbDExLjMtMTEuM2MwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTMwLjEtMzAuMQ0KCQljLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMNCgkJQy0xOTQuMyw0MTUuMS0xOTMuMyw0MTUuMS0xOTIuNyw0MTQuNX'+
			'oiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_up;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDAuNCw0MDMuOWwtMTIuNSwxMi41Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTE5LjctMTkuN2wtMTkuNywxOS43Yy0wLjcsMC43LTEuNywwLjctMi40LDANCgkJbC0xMi41LTEyLjVjLTAuNy0wLjctMC43LTEuNywwLTIuNGwzMy40LTMzLjVjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVjMC41LDAsMC45LDAuMSwx'+
			'LjMsMC41bDMzLjQsMzMuNQ0KCQlDLTEzOS43LDQwMi4yLTEzOS43LDQwMy4zLTE0MC40LDQwMy45eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk0LjcsNDE2LjRsMTkuNy0xOS43bDE5LjcsMTkuN2MwLjcsMC43LDEuNywwLjcsMi40LDBsMTIuNS0xMi41YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMzMuNC0zMy41DQoJCWMtMC4zLTAuMy0wLjgtMC41LTEuMy0wLjVjLTAuNCwwLTAuOSwwLjItMS4yLDAuNWwtMzMuNCwzMy41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMTIuNSwxMi41DQoJCUMtMTk2LjQsNDE3LjEtMTk1LjQsNDE3LjEtMT'+
			'k0LjcsNDE2LjR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_up;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._button_direction);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=50000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 87px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('HT_ANI', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('HT_ANI', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',360);
				radar.radarElement.setAttributeNS(null,'height',360);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 360 360');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 180 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 180 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 180 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 180 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 180;
				arcY1 += 180;
				arcX2 += 180;
				arcY2 += 180;
				var radarPathString = 'M180,180 L' + arcX1 + ',' + arcY1 + ' A 180 180 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ffd901');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ffd901');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 180;
				var radarYPos = activeMarker.radarYPos - 180;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500;
			var level = 1;
			while (mapWidth > levelLimit && mapHeight > levelLimit) {
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids = player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_hotspot_1_changenode = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._image_1 && hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._image_1 && hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_varchanged_HT_ANI = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._image_1 && hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._image_1 && hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._image_1.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._map_1.ggUpdateConditionTimer();
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(0.5,true);
		}
		me._timer_1.ggTimestamp=player.getLastActivity();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('HT_ANI', true);
			} else {
				player.setVariableValue('HT_ANI', false);
			}
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggDx=96;
		el.ggDy=185;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot_1.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_1']=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility='hidden';
			me._text_1.ggVisible=false;
			me.elementMouseOver['hotspot_1']=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ontouchend=function (e) {
			me.elementMouseOver['hotspot_1']=false;
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/image_1__o.png';
		me._image_1__img.ggOverSrc=hs;
		hs=basePath + 'images/image_1__a.png';
		me._image_1__img.ggDownSrc=hs;
		el.ggId="Image 1";
		el.ggDx=-4;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 81px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('HT_ANI') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms';
				if (me._image_1.ggCurrentLogicStateScaling == 0) {
					me._image_1.ggParameter.sx = 1;
					me._image_1.ggParameter.sy = 1;
					me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				}
				else {
					me._image_1.ggParameter.sx = 0.5;
					me._image_1.ggParameter.sy = 0.5;
					me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				}
			}
		}
		me._image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('HT_ANI') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, visibility 1000ms ease 0ms';
				if (me._image_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1.style.visibility="hidden";
					me._image_1.style.opacity=0;
				}
				else {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=1;
				}
			}
		}
		me._image_1.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._image_1.onmouseover=function (e) {
			me._image_1__img.src=me._image_1__img.ggOverSrc;
		}
		me._image_1.onmouseout=function (e) {
			me._image_1__img.src=me._image_1__img.ggNormalSrc;
		}
		me._image_1.onmousedown=function (e) {
			me._image_1__img.src=me._image_1__img.ggDownSrc;
		}
		me._image_1.onmouseup=function (e) {
			me._image_1__img.src=me._image_1__img.ggNormalSrc;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_1.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=-2;
		el.ggDy=52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 21px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.352941);';
		hs+='border: 1px solid #ffffff;';
		hs+='border: 1px solid rgba(255,255,255,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_1.appendChild(me._text_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['hotspot_1']) {
					me._text_1.style[domTransition]='none';
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._hotspot_1;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_1_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_1_varchanged_HT_ANI();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	me._text_2.logicBlock_alpha();
	player.addListener('changenode', function(args) { me._text_2.logicBlock_alpha(); });
	player.addListener('varchanged_HT_ANI', function(args) { me._text_2.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_changenode(); });
	player.addListener('varchanged_HT_ANI', function(args) { me.callChildLogicBlocksHotspot_hotspot_1_varchanged_HT_ANI(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};