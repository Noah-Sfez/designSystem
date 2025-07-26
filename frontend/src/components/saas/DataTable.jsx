import React, { useState, useMemo } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';
import { GlassInput } from '../ui/GlassInput';

export const DataTable = ({ 
  data = [], 
  columns = [], 
  searchable = true,
  sortable = true,
  pagination = true,
  pageSize = 10,
  className = '',
  title = '',
  actions = [],
  filters = []
}) => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [activeFilters, setActiveFilters] = useState({});

  const filteredData = useMemo(() => {
    let filtered = data;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply column filters
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value) {
        filtered = filtered.filter(item => item[key] === value);
      }
    });

    return filtered;
  }, [data, searchTerm, activeFilters]);

  const sortedData = useMemo(() => {
    if (!sortField) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  const tableContainerStyles = {
    padding: '0',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    overflow: 'hidden'
  };

  const headerSectionStyles = {
    padding: '24px 24px 16px 24px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
  };

  const titleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '16px'
  };

  const controlsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  };

  const searchContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
    minWidth: '300px'
  };

  const filtersContainerStyles = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  };

  const statsStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.7
  };

  const actionBarStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '12px'
  };

  const tableWrapperStyles = {
    overflowX: 'auto',
    maxHeight: '600px',
    overflowY: 'auto'
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent',
    minWidth: '700px'
  };

  const theadStyles = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 10
  };

  const headerCellStyles = {
    padding: '16px 20px',
    textAlign: 'left',
    color: 'var(--color-text)',
    fontWeight: '600',
    fontSize: '0.875rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    cursor: sortable ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    position: 'relative',
    userSelect: 'none'
  };

  const checkboxCellStyles = {
    ...headerCellStyles,
    width: '48px',
    cursor: 'pointer'
  };

  const rowStyles = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.2s ease'
  };

  const cellStyles = {
    padding: '16px 20px',
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    verticalAlign: 'middle',
    position: 'relative'
  };

  const selectedRowStyles = {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderLeft: '3px solid var(--color-primary)'
  };

  const paginationStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    background: 'rgba(255, 255, 255, 0.02)'
  };

  const pageInfoStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.7
  };

  const paginationControlsStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const handleSort = (field) => {
    if (!sortable) return;
    
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRowSelection = (rowIndex, isSelected) => {
    const newSelected = new Set(selectedRows);
    if (isSelected) {
      newSelected.add(rowIndex);
    } else {
      newSelected.delete(rowIndex);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((_, index) => startIndex + index)));
    }
  };

  const handleRowHover = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    e.currentTarget.style.transform = 'translateX(4px)';
  };

  const handleRowLeave = (e) => {
    const isSelected = e.currentTarget.classList.contains('selected');
    e.currentTarget.style.backgroundColor = isSelected ? 'rgba(99, 102, 241, 0.1)' : 'transparent';
    e.currentTarget.style.transform = 'translateX(0)';
  };

  const handleHeaderHover = (e) => {
    if (sortable) {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
    }
  };

  const handleHeaderLeave = (e) => {
    if (sortable) {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return (
      <span style={{ opacity: 0.3, fontSize: '0.75rem' }}>↕</span>
    );
    return (
      <span style={{ 
        opacity: 1, 
        fontSize: '0.75rem', 
        color: 'var(--color-primary)' 
      }}>
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleFilterChange = (filterKey, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setActiveFilters({});
    setSearchTerm('');
    setCurrentPage(1);
  };

  const CustomCheckbox = ({ checked, onChange, indeterminate = false }) => (
    <div 
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '4px',
        border: '2px solid var(--color-primary)',
        backgroundColor: checked ? 'var(--color-primary)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onClick={() => onChange(!checked)}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
          <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {indeterminate && !checked && (
        <div style={{
          width: '8px',
          height: '2px',
          backgroundColor: 'var(--color-primary)',
          borderRadius: '1px'
        }} />
      )}
    </div>
  );

  return (
    <GlassCard style={tableContainerStyles} className={`data-table ${className}`} hover={false}>
      <div style={headerSectionStyles}>
        {title && <h3 style={titleStyles}>{title}</h3>}
        
        <div style={controlsStyles}>
          {searchable && (
            <div style={searchContainerStyles}>
              <GlassInput
                placeholder="Rechercher dans le tableau..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ flex: 1 }}
              />
              {(Object.keys(activeFilters).length > 0 || searchTerm) && (
                <GlassButton size="sm" variant="ghost" onClick={clearFilters}>
                  Effacer
                </GlassButton>
              )}
            </div>
          )}
          
          {filters.length > 0 && (
            <div style={filtersContainerStyles}>
              {filters.map((filter) => (
                <select
                  key={filter.key}
                  value={activeFilters[filter.key] || ''}
                  onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--color-text)',
                    fontSize: '0.875rem'
                  }}
                >
                  <option value="">Tous {filter.label}</option>
                  {filter.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ))}
            </div>
          )}
          
          <div style={statsStyles}>
            <span>{sortedData.length} résultat{sortedData.length !== 1 ? 's' : ''}</span>
            {selectedRows.size > 0 && (
              <>
                <span>•</span>
                <span>{selectedRows.size} sélectionné{selectedRows.size !== 1 ? 's' : ''}</span>
              </>
            )}
          </div>
        </div>

        {selectedRows.size > 0 && actions.length > 0 && (
          <div style={actionBarStyles}>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-text)', opacity: 0.8 }}>
              Actions :
            </span>
            {actions.map((action, index) => (
              <GlassButton
                key={index}
                size="sm"
                variant="secondary"
                onClick={() => action.onClick(Array.from(selectedRows))}
              >
                {action.label}
              </GlassButton>
            ))}
          </div>
        )}
      </div>

      <div style={tableWrapperStyles}>
        <table style={tableStyles}>
          <thead style={theadStyles}>
            <tr>
              <th style={checkboxCellStyles}>
                <CustomCheckbox
                  checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                  indeterminate={selectedRows.size > 0 && selectedRows.size < paginatedData.length}
                  onChange={handleSelectAll}
                />
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={headerCellStyles}
                  onClick={() => handleSort(column.key)}
                  onMouseEnter={handleHeaderHover}
                  onMouseLeave={handleHeaderLeave}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{column.label}</span>
                    {sortable && getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => {
              const globalIndex = startIndex + index;
              const isSelected = selectedRows.has(globalIndex);
              
              return (
                <tr
                  key={globalIndex}
                  style={isSelected ? { ...rowStyles, ...selectedRowStyles } : rowStyles}
                  className={isSelected ? 'selected' : ''}
                  onMouseEnter={handleRowHover}
                  onMouseLeave={handleRowLeave}
                >
                  <td style={cellStyles}>
                    <CustomCheckbox
                      checked={isSelected}
                      onChange={(checked) => handleRowSelection(globalIndex, checked)}
                    />
                  </td>
                  {columns.map((column) => (
                    <td key={column.key} style={cellStyles}>
                      {column.render ? column.render(row[column.key], row, globalIndex) : row[column.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div style={paginationStyles}>
          <div style={pageInfoStyles}>
            Affichage de {startIndex + 1} à {Math.min(startIndex + pageSize, sortedData.length)} sur {sortedData.length} résultats
          </div>
          
          <div style={paginationControlsStyles}>
            <GlassButton
              size="sm"
              variant="ghost"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              ⟨⟨
            </GlassButton>
            
            <GlassButton
              size="sm"
              variant="ghost"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ⟨
            </GlassButton>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              {getPageNumbers().map(page => (
                <GlassButton
                  key={page}
                  size="sm"
                  variant={currentPage === page ? 'primary' : 'ghost'}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </GlassButton>
              ))}
            </div>

            <GlassButton
              size="sm"
              variant="ghost"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              ⟩
            </GlassButton>
            
            <GlassButton
              size="sm"
              variant="ghost"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              ⟩⟩
            </GlassButton>
          </div>
        </div>
      )}
    </GlassCard>
  );
};