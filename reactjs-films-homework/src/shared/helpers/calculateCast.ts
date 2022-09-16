import { CastDataType } from "../../pages/MovieDetails/MovieDetails";


export const calculateCast = (isCastExtended: boolean, cast: CastDataType[]) => {
  if (isCastExtended || cast.length <= 7) {
    return [...cast];
  } 
  
  return cast.slice(0, 6);
  
}