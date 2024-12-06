import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @param filterField field modular field
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string, objectKey: string | null = null): any[] {
    if (!items || !searchText) {
        return items; 
    }
    const normalizedSearchText = searchText.toLowerCase();

    if (objectKey) {
        return items.filter((item) => {
            return item[objectKey] && item[objectKey].toLowerCase().includes(normalizedSearchText);
        });
    } else {
        return items.filter((item) => {
            return item.title && item.title.toLowerCase().includes(normalizedSearchText);
        });
    }
}
}
