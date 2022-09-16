export const calculateMovieDuration = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}:${minutes<10 ? String(minutes).padStart(2, '0') : minutes}`
}