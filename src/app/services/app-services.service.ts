import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
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
  addNewCarBody: any;
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


  public AddNewCar(Title, Images, Kilometers, Price, Condition, PreviousOwners, NextInspection, Warranty, FullService, NonSmokingVehicle, GearingType, EngineVolume, DriveChain, Cylinders, HorsePower, Torque
    , Fuel, Consumption, CO2Emission, EmissionClass, EmissionLabel
    , Brand, Model, FirstRegistration, BodyColor, PaintType, BodyColorOriginal, InteriorFittings, InteriorColors,
    Body, NrofDoors, NrofSeats, ModelCode, CountryVersion,
    ComfortAndConvenience, EntertainmentAndMedia, Extras, SafetyAndSecurity, Description, DateOfPost): Observable<any> {
    this.addNewCarBody = {
      Title, Images, Kilometers, Price, Condition, PreviousOwners, NextInspection, Warranty, FullService, NonSmokingVehicle, GearingType, EngineVolume, DriveChain, Cylinders, HorsePower, Torque
      , Fuel, Consumption, CO2Emission, EmissionClass, EmissionLabel
      , Brand, Model, FirstRegistration, BodyColor, PaintType, BodyColorOriginal, InteriorFittings, InteriorColors,
      Body, NrofDoors, NrofSeats, ModelCode, CountryVersion,
      ComfortAndConvenience, EntertainmentAndMedia, Extras, SafetyAndSecurity, Description, DateOfPost
    }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`${this.url}/addcar`, this.addNewCarBody, { headers: headers });
  }

  public Register(firstName, lastName, email, password, phoneNumber, dataOfJoin): Observable<any> {
    this.registerBody = { firstName, lastName, email, password, phoneNumber, dataOfJoin }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`${this.url}/register`, this.registerBody, { headers: headers });
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
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpClient.get(`${this.url}/filter/cars`, { params });

  }

}
