import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel } from "../models"
 
export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  
  incrementTrackLikes(trackId) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfLikes`)
  }
}