import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User, Car } from '../_models';
@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  url: any = "http://192.168.1.5:3000";
  carid: any;
  updateuserIdbody: any;
  updateuserbody: any;
  userId: any;
  // addNewCarBody: any;
  addNewCarBody: {
    Title: any; Kilometers: any; Price: any; Condition: any; PreviousOwners: any;
    NextInspection: any; Warranty: any; FullService: any; NonSmokingVehicle: any; GearingType: any; EngineVolume: any;
    DriveChain: any; Cylinders: any; HorsePower: any; Torque
    : any; Fuel: any; Consumption: any; CO2Emission: any; EmissionClass: any; EmissionLabel
    : any; Brand: any; Model: any; FirstRegistration: any; BodyColor: any; PaintType: any; BodyColorOriginal: any; InteriorFittings: any; InteriorColors: any;
    Body: any; NrofDoors: any; NrofSeats: any; ModelCode: any; CountryVersion: any;
    ComfortAndConvenience: any; EntertainmentAndMedia: any; Extras: any; SafetyAndSecurity: any; Description: any; DateOfPost
  };
  registerBody: { firstName: any; lastName: any; email: any; password: any; phoneNumber: any; dataOfJoin: any; };
  carId: any;
  updatecarIdbody: any;
  updatecarbody: any;
  searchbody: {};

  constructor(private httpClient: HttpClient) { }

  public getRecentCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/latestcars`);
  }
  public MostViewsCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/mostviewscars`);
  }

  public AllMostViewsCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/allmostviewscars`);
  }

  public getCarById(id): Observable<any> {
    this.carid = id;
    return this.httpClient.get<Car[]>(`${this.url}/car/${this.carid}`);
  }

  public mypassword(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get<User>(`${this.url}/mypassword/${this.userId}`);
  }
  public changeEmail(_id, email): Observable<any> {
    this.updateuserIdbody = _id;
    this.updateuserbody = { email }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/updateuser/${this.updateuserIdbody}`, this.updateuserbody, { headers: headers });
  }
  public changePassword(_id, password): Observable<any> {
    this.updateuserIdbody = _id;
    this.updateuserbody = { password }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/updatepassword/${this.updateuserIdbody}`, this.updateuserbody, { headers: headers });
  }


  public AddNewCar(Title, Kilometers, Price, Condition, PreviousOwners, NextInspection, Warranty, FullService, NonSmokingVehicle, GearingType, EngineVolume, DriveChain, Cylinders, HorsePower, Torque, Fuel, Consumption, CO2Emission, EmissionClass, EmissionLabel, Brand, Model, FirstRegistration, BodyColor, PaintType, BodyColorOriginal, InteriorFittings, InteriorColors, Body, NrofDoors, NrofSeats, ModelCode, CountryVersion, ComfortAndConvenience, EntertainmentAndMedia, Extras, SafetyAndSecurity, Description, DateOfPost): Observable<any> {
    this.addNewCarBody = {
      Title, Kilometers, Price, Condition, PreviousOwners,
      NextInspection, Warranty, FullService, NonSmokingVehicle, GearingType, EngineVolume,
      DriveChain, Cylinders, HorsePower, Torque, Fuel, Consumption,
      CO2Emission, EmissionClass, EmissionLabel, Brand, Model, FirstRegistration,
      BodyColor, PaintType, BodyColorOriginal, InteriorFittings, InteriorColors, Body,
      NrofDoors, NrofSeats, ModelCode, CountryVersion, ComfortAndConvenience, EntertainmentAndMedia,
      Extras, SafetyAndSecurity, Description, DateOfPost
    }
    // const params = new HttpParams()
    //   .set('Title', Title)
    //   .set('Images', Images)
    //   .set('Kilometers', Kilometers)
    //   .set('Price', Price)
    //   .set('Condition', Condition)
    //   .set('PreviousOwners', PreviousOwners)
    //   .set('NextInspection', NextInspection)
    //   .set('Warranty', Warranty)
    //   .set('FullService', FullService)
    //   .set('NonSmokingVehicle', NonSmokingVehicle)
    //   .set('GearingType', GearingType)
    //   .set('EngineVolume', EngineVolume)
    //   .set('DriveChain', DriveChain)
    //   .set('Cylinders', Cylinders)
    //   .set('HorsePower', HorsePower)
    //   .set('Torque', Torque)
    //   .set('Fuel', Fuel)
    //   .set('Consumption', Consumption)
    //   .set('CO2Emission', CO2Emission)
    //   .set('EmissionClass', EmissionClass)
    //   .set('EmissionLabel', EmissionLabel)
    //   .set('Brand', Brand)
    //   .set('Model', Model)
    //   .set('FirstRegistration', FirstRegistration)
    //   .set('BodyColor', BodyColor)
    //   .set('PaintType', PaintType)
    //   .set('BodyColorOriginal', BodyColorOriginal)
    //   .set('InteriorFittings', InteriorFittings)
    //   .set('InteriorColors', InteriorColors)
    //   .set('Body', Body)
    //   .set('NrofDoors', NrofDoors)
    //   .set('NrofSeats', NrofSeats)
    //   .set('ModelCode', ModelCode)
    //   .set('CountryVersion', CountryVersion)
    //   .set('ComfortAndConvenience', ComfortAndConvenience)
    //   .set('EntertainmentAndMedia', EntertainmentAndMedia)
    //   .set('Extras', Extras)
    //   .set('SafetyAndSecurity', SafetyAndSecurity)
    //   .set('Description', Description)
    //   .set('DateOfPost', DateOfPost);
    // this.addNewCarBody = { NextInspection, EngineVolume, DriveChain, Consumption, CO2Emission, FirstRegistration }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    // console.log(this.addNewCarBody);
    return this.httpClient.post(`${this.url}/addnewcar`, this.addNewCarBody);
  }

  public Register(firstName, lastName, email, password, phoneNumber, dataOfJoin): Observable<any> {
    this.registerBody = { firstName, lastName, email, password, phoneNumber, dataOfJoin }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`${this.url}/register`, this.registerBody, { headers: headers });
  }


  public addCarPhoto(image: File, DateOfPost): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('multi-files', image);
    // formData.append('DateOfPost', DateOfPost);

    let headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
    return this.httpClient.post(`${this.url}/multiple-upload/${DateOfPost}`, formData);
  }


  public comparepassword(id, password): Observable<any> {
    this.userId = id;
    return this.httpClient.get<User>(`${this.url}/comparepassword/${this.userId}/${password}`);
  }

  public getNewCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/new/cars`);
  }

  public getUsedCars(): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/used/cars`);
  }

  public increamentViews(_id): Observable<any> {
    this.carId = _id;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/incrementviews/${this.carId}`, { headers: headers });
  }


  public changeCarStatus(_id, Reserved): Observable<any> {
    this.updatecarIdbody = _id;
    this.updatecarbody = { Reserved }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`${this.url}/updatecar/${this.updatecarIdbody}`, this.updatecarbody, { headers: headers });
  }

  public searchForCars(Brand, Body, FirstRegistration, Condition, Kilometers): Observable<any> {
    this.searchbody = { Brand, Body, FirstRegistration, Condition, Kilometers };
    const params = new HttpParams()
      .set('Brand', Brand)
      .set('Body', Body)
      .set('FirstRegistration', FirstRegistration)
      .set('Condition', Condition)
      .set('Kilometers', Kilometers);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get(`${this.url}/filter/cars`, { params });

  }

  public deleteCar(id): Observable<any> {
    return this.httpClient.delete(`${this.url}/deletecar/${id}`);
  }


  public addToFavourites(UserId, CarId): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`${this.url}/addtofavourites/${UserId}/${CarId}`, { headers: headers });
  }

  public deleteFromFavourites(UserId, CarId): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.delete(`${this.url}/deletefromfavourites/${UserId}/${CarId}`, { headers: headers });
  }

  public getMyFavourties(userId): Observable<any> {
    return this.httpClient.get<Car[]>(`${this.url}/myfavourties/${userId}`);
  }
}
