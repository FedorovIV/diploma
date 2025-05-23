import { makeAutoObservable } from "mobx";

import { SwiperUserDTO } from "../models/swiper/SwiperUserDTO";
import SwiperService from "../services/SwiperService";
import { FilterData } from "../models/swiper/FilterData";
import { SexType } from "../models/swiper/SexType";
import { API_URL } from "../http";

export default class SwiperStore {
  users: SwiperUserDTO[] = [];
  currentId: number = 0;

  order: number[] = [0, 1, 1];

  filtedSet: FilterData = {
    ageFrom: 0,
    ageTo: 90,
    sex: SexType.FEMALE,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(filterData: FilterData) {
    this.filtedSet = filterData;
  }

  next() {
    if (this.order.length > 0) {
      const last = this.order.pop()!;
      this.order.unshift(last);
    }
  }

  prev() {
    if (this.order.length > 0) {
      const first = this.order.shift()!;
      this.order.push(first);
    }
  }

  setUsers(users: SwiperUserDTO[]) {
    this.users = users;
  }

  setCurrentId(currentId: number) {
    this.currentId = currentId;
  }

  getUsers = async () => {
    try {
      const response = await SwiperService.getUsersForSwiper(this.filtedSet);
      if (response.length > 0) {
        this.setUsers(response);
      } else {
        this.setUsers(response);
        return "You have listed to the end!";
      }
    } catch (error: any) {
      console.log(error?.message?.data);
    }
  };

  ratePerson = async (email: string | undefined, isLike: boolean) => {
    try {
      if (email != null) {
        const response = await SwiperService.ratePerson(email, isLike);
      }
    } catch (error: any) {
      console.log(error?.message?.data);
    }
  };

  getHamachiUrl(url: string) {
    return API_URL + url.substring(21);
  }
}
