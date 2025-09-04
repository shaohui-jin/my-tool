const n=`/* HTML: <div class="loader"></div> */
.dots-loader_9 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
  animation: dots-loader_9-0 1.5s infinite steps(2);
}

.dots-loader_9::before,
.dots-loader_9::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}

.dots-loader_9::before {
  box-shadow: 26px 0;
  transform: translateX(-26px);
  animation: dots-loader_9-1 .75s infinite linear alternate;
}

.dots-loader_9::after {
  transform: translateX(13px) rotate(0deg) translateX(13px);
  animation: dots-loader_9-2 .75s infinite linear alternate;
}

@keyframes dots-loader_9-0 {
  0%, 49.9% {
    transform: scale(1)
  }
  50%, 100% {
    transform: scale(-1)
  }
}

@keyframes dots-loader_9-1 {
  100% {
    box-shadow: 52px 0
  }
}

@keyframes dots-loader_9-2 {
  100% {
    transform: translateX(13px) rotate(-180deg) translateX(13px)
  }
}
`;export{n as default};
