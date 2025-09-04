const n=`.dots-loader_10 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.dots-loader_10::before,
.dots-loader_10::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.dots-loader_10::before {
  box-shadow: -26px 0;
  animation: dots-loader_10-1 1.5s infinite linear;
}
.dots-loader_10::after {
  transform: rotate(0deg) translateX(26px);
  animation: dots-loader_10-2 1.5s infinite linear;
}
@keyframes dots-loader_10-1 {
  50%{transform:translateX(26px)}
}
@keyframes dots-loader_10-2 {
  100%{transform:rotate(-360deg) translateX(26px)}
}
`;export{n as default};
