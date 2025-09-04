const n=`.dots-loader_41 {
  height: 15px;
  aspect-ratio: 5;
  display: flex;
  justify-content: space-between;
  --_g: no-repeat radial-gradient(farthest-side, #000 95%, #0000);
  background: var(--_g) calc(1 * 100% / 3) 0,
  var(--_g) calc(2 * 100% / 3) 0;
  background-size: 20% 100%;
}

.dots-loader_41:before,
.dots-loader_41:after {
  content: "";
  height: inherit;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  animation: dots-loader_41 1s infinite;
}

.dots-loader_41:after {
  --s: -1, -1;
}

@keyframes dots-loader_41 {
  0% {
    transform: scale(var(--s, 1)) translate(0, 0)
  }
  33% {
    transform: scale(var(--s, 1)) translate(0, 130%)
  }
  66% {
    transform: scale(var(--s, 1)) translate(400%, 130%)
  }
  100% {
    transform: scale(var(--s, 1)) translate(400%, 0)
  }
}
`;export{n as default};
