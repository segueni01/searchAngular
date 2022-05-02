import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(posts: Array<any>, page: number = 0, search: string = ""): Array<any> {

    if(search.length === 0)
      return posts.slice(page, page + 5 );

    const filteredPosts = posts.filter( post => post.user.name.includes(search) 
                                             || post.user.email.includes(search)
                                             || post.body.includes(search)
                                             || post.title.includes(search));

    return filteredPosts.slice(page, page + 5);
  }

}
