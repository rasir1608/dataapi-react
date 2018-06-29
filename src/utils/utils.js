/* eslint-disable */
import moment from 'moment';
export function paintFixedWaterMark(workId) {
  const wrap = document.createElement('div');
  wrap.className = 'fixed-water-mark';
  const wm = document.createElement('canvas');
  wm.id = 'watermark';
  wm.width = 100;
  wm.height = 80;
  wm.style.display = 'none';
  wrap.appendChild(wm);
  const rwm = document.createElement('canvas');
  rwm.id = 'repeat-watermark';
  wrap.appendChild(rwm);
  document.body.appendChild(wrap);
  // watermark single demo
  const cw = document.getElementById('watermark');
  const ctx = cw.getContext('2d');
  ctx.clearRect(0, 0, 100, 80);
  ctx.font = '15px 黑体';
  ctx.rotate(-20 * Math.PI / 180);
  ctx.fillStyle = 'rgba(100,100,100,0.2)';
  ctx.fillText(workId, -10, 60);
  ctx.rotate('20*Math.PI/180');
  // watermark repeat
  const crw = document.getElementById('repeat-watermark');
  crw.width = window.innerWidth;
  crw.height = window.innerHeight;
  const ctxr = crw.getContext('2d');
  ctxr.clearRect(0, 0, crw.width, crw.height);
  const pat = ctxr.createPattern(cw, 'repeat');
  ctxr.fillStyle = pat;
  ctxr.fillRect(0, 0, crw.width, crw.height);
}

export function arrToTimeArr(arr,key,{format}) {
  const obj = {}
  arr.forEach(v=>{
    let o = v[key];
    if(format) {
      o = moment(v[key]).format(format);
    }
    if (!Array.isArray(obj[o])) {
      obj[o] = []
    }
    obj[o].push(v);
  })
  return obj;
}

export function distance(arr){
  const arr2 = [];
  const obj = {};
  arr.forEach(v=>{
    const str = v.epName+','+v.pid;
    if(!obj[str]) obj[str] = {position:[],comName:[],num:v.num,photo:''};
    if(v.photo) obj[str].photo = v.photo;
    obj[str].position.push(v.position);
    obj[str].comName.push(v.comName)
  })
  Object.keys(obj).forEach(v=>{
    const obc = Object.assign({},obj[v]);
    const arr3 = v.split(',');
    obc.epName= arr3[0];
    obc.pid = arr3[1];
    arr2.push(obc);
  })
  return arr2;
}
