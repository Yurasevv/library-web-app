package com.yu.librarywebapp.dao;

import com.yu.librarywebapp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
