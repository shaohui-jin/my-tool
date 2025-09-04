const n=`.dots-loader_22 {
  width: 17px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  display: grid;
  animation: dots-loader_22-0 2s infinite linear;
}

.dots-loader_22:before,
.dots-loader_22:after {
  content: "";
  grid-area: 1/1;
  margin: 15%;
  border-radius: 50%;
  background: inherit;
  transform: rotate(0deg) translate(150%);
  animation: dots-loader_22 1s infinite;
}

.dots-loader_22:after {
  animation-delay: -.5s
}

@keyframes dots-loader_22-0 {
  100% {
    transform: rotate(1turn)
  }
}

@keyframes dots-loader_22 {
  100% {
    transform: rotate(1turn) translate(150%)
  }
}
`;export{n as default};
