const n=`.dots-loader_29 {
  --s: 15px;
  width: calc(var(--s) * 2.33);
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
  animation: dots-loader_29-0 1s infinite;
}

.dots-loader_29::before,
.dots-loader_29::after {
  content: "";
  width: var(--s);
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) top,
  var(--_g) bottom;
  background-size: 100% var(--s);
  transform-origin: 50% calc(100% - var(--s) / 2);
  animation: inherit;
  animation-name: dots-loader_29-1;
}

.dots-loader_29::after {
  --_s: -1;
}

@keyframes dots-loader_29-0 {
  100% {
    transform: translateY(calc(var(--s) - 100%))
  }
}

@keyframes dots-loader_29-1 {
  100% {
    transform: rotate(calc(var(--_s, 1) * -180deg))
  }
}
`;export{n as default};
