<?php

namespace horstoeko\laravelservicerepository\Concerns;

use Illuminate\Support\Facades\DB;

trait HandlesTransactions
{
    /**
     * Start a database transaction
     *
     * @return void
     */
    public function startTransaction(): void
    {
        DB::beginTransaction();
    }

    /**
     * Commit a formerly started database transaction
     *
     * @return void
     */
    public function commitTransaction(): void
    {
        DB::commit();
    }

    /**
     * Rollback a formerly started database transaction
     *
     * @return void
     */
    public function rollbackTransaction(): void
    {
        DB::rollBack();
    }

    /**
     * Performs commit if $condition is true, otherwise rollback transaction
     *
     * @param boolean $condition
     * @return void
     */
    public function commitIf(bool $condition): void
    {
        if ($condition === true) {
            $this->commitTransaction();
        } else {
            $this->rollbackTransaction();
        }
    }
}