import React, { useState } from 'react';
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
  className = '' 
}) => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  const tableContainerStyles = {
    padding: '24px',
    background: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    gap: '16px',
    flexWrap: 'wrap'
  };

  const searchContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: '300px'
  };

  const statsStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.7
  };

  const tableWrapperStyles = {
    overflowX: 'auto',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    background: 'rgba(255, 255, 255, 0.02)'
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'transparent',
    minWidth: '600px'
  };

  const theadStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
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
    position: 'relative'
  };

  const rowStyles = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.2s ease'
  };

  const cellStyles = {
    padding: '16px 20px',
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    verticalAlign: 'middle'
  };

  const paginationStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '24px',
    gap: '16px',
    flexWrap: 'wrap'
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

  const handleRowHover = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    e.currentTarget.style.transform = 'translateX(2px)';
  };

  const handleRowLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.transform = 'translateX(0)';
  };

  const handleHeaderHover = (e) => {
    if (sortable) {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
    }
  };

  const handleHeaderLeave = (e) => {
    if (sortable) {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return '↕';
    return sortDirection === 'asc' ? '↑' : '↓';
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

  return (
    <GlassCard style={tableContainerStyles} className={`data-table ${className}`} hover={false}>
      {searchable && (
        <div style={headerStyles}>
          <div style={searchContainerStyles}>
            <GlassInput
              placeholder="Rechercher dans le tableau..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ flex: 1 }}
            />
          </div>
          <div style={statsStyles}>
            <span>{sortedData.length} résultat(s)</span>
            <span>•</span>
            <span>Page {currentPage} sur {totalPages}</span>
          </div>
        </div>
      )}

      <div style={tableWrapperStyles}>
        <table style={tableStyles}>
          <thead style={theadStyles}>
            <tr>
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
                    {sortable && (
                      <span style={{ 
                        fontSize: '0.75rem', 
                        opacity: sortField === column.key ? 1 : 0.3,
                        transition: 'opacity 0.2s'
                      }}>
                        {getSortIcon(column.key)}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                style={rowStyles}
                onMouseEnter={handleRowHover}
                onMouseLeave={handleRowLeave}
              >
                {columns.map((column) => (
                  <td key={column.key} style={cellStyles}>
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
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