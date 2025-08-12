import React from 'react';

interface ChecklistItem {
  number: string;
  title: string;
  content: string;
}

interface SafetyChecklistProps {
  items: ChecklistItem[];
}

export default function SafetyChecklist({ items }: SafetyChecklistProps): React.JSX.Element {
  return (
    <div className="checklist-container">
      <div className="checklist-header">
        <h2 className="checklist-title">
          安全釣行チェックリスト
        </h2>
        <p className="checklist-subtitle">
          出発前に必ずチェック！安全な釣りのための5つのポイント
        </p>
      </div>
      
      <div className="checklist-grid">
        {items.map((item, index) => (
          <div key={index} className="checklist-item">
            <div className="checklist-item-header">
              <div className="checklist-item-number">
                {item.number}
              </div>
              <h3 className="checklist-item-title">{item.title}</h3>
            </div>
            <p className="checklist-item-content">{item.content}</p>
          </div>
        ))}
      </div>
      
      <div className="checklist-footer">
        <div className="checklist-completion">
          <span className="checklist-completion-text">
            全てチェックできたら、安全な釣りの準備完了です
          </span>
        </div>
      </div>
    </div>
  );
}
