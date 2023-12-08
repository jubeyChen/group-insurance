import{a3 as a,r,d as t,o as B,c as g,a as A,f as e,_ as U}from"./index-039f4073.js";const R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgB7VTLDYJAEB0g4UZiCduBWoFYgS1YgoRAwg1PHAihBVuwArED7YASOJMAPoyHlc8uazxo9CUTJsvuezuzL0P07dDGfoRhOLMsa4t0jjiXZZkFQZDTOwSiKGKmaZ6QMm45h8haVeRJIEmSbV3XzDCMVdM0dkuKyBBtzjRNu1RVdRQR6rqeu6576AmAfIdPym8G2dL3/UscxzYOnmgicMm953nhXZBbnHU34sb3NVRTkAJwmaJXQQuuRRuQLqjfogxVnSXkwy3ikaYpg1DvkXF47ThOruKwUZs+RGykK8QV5AeQF6oOG2wRCSBzmJKLRBA5bLKLRBA5TOoiEkDmsEkuajHmFJnDujwvzaIxhw1x/WfRID5/FpEClGcR/RxuDRkgJ/bYqiAAAAAASUVORK5CYII=",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgB7ZTBDYAgDEWLcQA2cAVHYAMdwQ3UDRzFTWQE3MQN8Bt78EAKiifjS8o/0PzwKYEogvdeUw4w6PzJIPUVJGNYmxyTJD5mUh4Lbr+GhEZZsWr0mJCBUspex/iU6ZU4KhKnR7UohxoD+xviOJKA+cxHXqS+/7HdN7GsK+WQ8int4U9ve5MUTE4AAAAASUVORK5CYII=",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIgSURBVHgB3VVdUsJADF5+3xh6A3sDvYHlBMoJlBNoB3jgifLEAzDFE4AnQE5gbyCewHqD+gjDj1+cLMalW9FHMrOz2ySbL8kmqVKnQrljlIIgcCqVyjWO51gOVoL1ulqtok6nE/92PxNkMBh4hUKhu9vtPKuBXC5aLpeNLDArSBiG3e12GxjsGIAJDFM0rhTk8/nA9/3e0SAGQILzQ7FYHMNIInRc8D0cuxrQBnQAMhqNbrFN6AyvF0hXHRdjLe/3+65MDYFBb4Z1wSy/2WyOpc28/CAD7BlRDICaBIDBsFwuv8GRUPNIjvTVSJ9ZXag5VhAY8EToNZkeIqTnno/3kk96kDX401mv17dWEHh0QztCj2QEAoTyHWP3TVm73Y6o0uiMDFxZQXSpYp+rFIKhYLPZ1LGP0+SQzfn+RSoIPaD6jihOM0JvAi9f0D9Bmlzcc4bD4dkBiCSkw0njaw9h7FL9gfYg/AYJG3HUPwhOuPrcarXeD0DY+IJ28+GOJX2PCkfyf4CIh/NobqlDTxOL/a8e04UDZx+tIBgdU8UpQ59MzKai8cJl+iD5NKXRY8/8GeNuJOVpY4UaLWSPFpiw9awJSxGUSqUZdHXZNjBWppkgRFSi8GY/XrB65r+DvK9Wq3c8BRyOtEe9ZNqzjnoDSHFkMYO6spKyADJBiHjCTrJ+WlRJWAQQ2XSO+v3qfwc1I6KpYv+g90KkT+YQPW36BLEKJsZbM/GBAAAAAElFTkSuQmCC",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgB3VVdctNADNba9I0W3wBzApIbONMJMzxBT9D2GaYxJ2h6AxeGZ+AEhSdm2mbsGxBOUHMCws9b6lW12l3H63idzPStmkm8Xkv6VtInLcBDEbGVVnoRQbX3GgJ4DoARmS1AVj8hrArIXpb3A3l7lUAoTmmV9GgVIJbHfWCB1/RkdkoAuQsgSvqbm6eVBHDnhvU9IrwAAqfmbUHrc4D/GWQHi1on/R4DhAQQKOcx76GYwvv9s80g6eURGX7SLzgHcXvQm3cFhjsXtBrwu8R38GGc+UG0QW5OVoL4N3RO7wXKI8Dqh7GjyMNnkI1qu1ZNKHwbuliONgKcXE84tcqhwGOzS0y8PWqquSAYHJrVZmpy3SDj2qWXA8jGBduxV/HKD2KZJPFbvaN6hIvcBqiJUQJUi5bdoBuk6QhlWe/h7m+ukzotA1wfOgCcVhM11tSO4M3sqXX3CLpEiEgvQvOkOmGQw2T2mTylnQA9sopEK5tCG5DsBVEYR2Y/2gggMK7XH/d/rYNomevdRuFUQcVyyI61EJNkd++s7Apn21FaFS6BlOYWNKJUJ0d5TgAjjrAtuqbaRsovzU+tZuSmugFOjUpJOGw2lVcUA3HXNuNaKt1IdFPZ2UPFrvI1+nZFgI/tlFBRnLVT2T0g06sp0dFO1ZIN23eHOr3cm9ChFBk0UdQBs/G07c5/n7hAVr0khtFPxPSM3U/dAP0gDMQDU03kpEerMACFT2HL69fcHZLGhQieEMv+QBASw/5+3WpKPxi5A4ct/Ck05eMGAAAAAElFTkSuQmCC",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgB7ZTBbcIwFIbfS5xLmwMj0A3oBKUblA0CsnptOgHdIPScA9mg6gS0GzACI3DHxvUjjmIVJ0bJAZD4JSt/vjy9P4qfA3DTpQt9BUmSjELGMvJSiGlRFBvDh5ovyQeI73mer9v6MPAoCKMvfRmS143JPxq+qrjcA/GH1j7gEWLZzNyNLD5w13QMAgWfLo+ATt5LnPMxrVP5WXXK1A0Cxt6odi9EYU2dkzfJO3UhO0zduPTsSV+eDz6KlnpvXv7zJvmHwYSUwtqbkCPeI+inturbzaH1sJK8ny5i4XQnZYoKt3F8v6i4FLuJ3qM00O8ax3cLuCol+qwkjvPSxF3y7tGMv2Yh4IrWjPO5xecWz3oHIai09mh59eHinYP0H3Nj+a31ZO2s6RoUgJoogF9a5Cuup9HJb7pe/QGRrWU69+7JkgAAAABJRU5ErkJggg==",w=a("breadcrumbs",()=>({breadcrumbs:r([])})),n={class:"table-component border border-[#b9b9b9] rounded-[16px] overflow-hidden"},c={class:"w-full","aria-hidden":"true"},m={class:"w-full"},d=t({__name:"DraggableTable",setup(o){return(s,S)=>(B(),g("div",n,[A("table",c,[A("thead",null,[A("tr",m,[e(s.$slots,"th",{},void 0,!0)])]),e(s.$slots,"tobodyTr",{},void 0,!0)])]))}});const I=U(d,[["__scopeId","data-v-71a0952f"]]);export{I as D,R as _,Q as a,D as b,b as c,u as d,w as u};
