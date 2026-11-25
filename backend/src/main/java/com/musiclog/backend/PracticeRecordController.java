package com.musiclog.backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/practice-records")
@CrossOrigin(origins = "http://localhost:5173")
public class PracticeRecordController {

    private final PracticeRecordRepository repository;

    public PracticeRecordController(PracticeRecordRepository repository) {
        this.repository = repository;
    }

    // 練習記録一覧を取得
    @GetMapping
    public List<PracticeRecord> getAllRecords() {
        return repository.findAll();
    }

    // 練習記録を登録
    @PostMapping
    public PracticeRecord createRecord(@RequestBody PracticeRecord record) {
        return repository.save(record);
    }

    // 練習記録を削除
    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        repository.deleteById(id);
    }
}