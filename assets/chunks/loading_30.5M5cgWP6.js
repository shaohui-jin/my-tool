const n=`.dots-loader_30 {
  --s: 15px;
  width: calc(var(--s)*2.33);
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
}
.dots-loader_30::before,
.dots-loader_30::after {
  content: "";
  width: var(--s);
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) top,
    var(--_g) bottom;
  background-size: 100% var(--s);
  transform-origin: 50% calc(100% - var(--s)/2);
  animation: dots-loader_30 1s infinite;
}
.dots-loader_30::after {
  transform-origin: 50% calc(var(--s)/2);
}
@keyframes dots-loader_30 {
  70%,100% {transform:rotate(-270deg)}
}
`;export{n as default};
