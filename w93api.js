function load(url) {
import(url);
return "No import errors.";
}
function addtoapp(name,exec,categ) {
le._apps[name] = {
    name: name,
    categories: categ,
    exec: exec
}
}
function process(exe) {
location.hash = "!"+exe
}
var debug = {
deb:function(o,t,e){$db.get(t,function(t,n){e(t,n||o)})},
set:function(path,con){$file.save(path,con)}
}
