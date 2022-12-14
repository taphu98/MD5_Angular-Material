import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form: any={};
  category: Category;
  status = 'Please fill in the form to create category'
  error1: any = {
    message: 'no_name_category'
  };
  error2: any = {
    message: 'no_avatar_category'
  };
  success: any = {
    message: 'create_success'
  };
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.category = new Category(
      this.form.nameCategory,
      this.form.avatarCategory
    )
    this.categoryService.createCategory(this.category).subscribe(data =>{
      console.log('data ==>',data);
      if (JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The name category is existed! Please try again!'
      }
      if (JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'Please upload avatar!'
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)){
        this.status = 'Create success!'
      }
    })
  }

  onUploadAvatar($event: string) {
    this.form.avatarCategory = $event;
  }
}
