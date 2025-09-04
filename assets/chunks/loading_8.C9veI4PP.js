const n=`.dots-loader_8 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.dots-loader_8::before,
.dots-loader_8::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.dots-loader_8::before {
  box-shadow: -25px 0;
  animation: dots-loader_8-1 1s infinite linear;
}
.dots-loader_8::after {
  transform: rotate(0deg) translateX(25px);
  animation: dots-loader_8-2 1s infinite linear;
}

@keyframes dots-loader_8-1 {
  100%{transform: translateX(25px)}
}
@keyframes dots-loader_8-2 {
  100%{transform: rotate(-180deg) translateX(25px)}
}
`;export{n as default};
